import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { PoolFactory, poolDeploy } from "../generated/PoolFactory/PoolFactory"
import { addedLiquidityEvent, newPoolEvent } from "../generated/templates/Pool/Pool"
import { Transfer } from "../generated/templates/LPToken/LPToken"
import { Pool, User, TokenBalance } from "../generated/schema"
import { Pool as poolContract } from "../generated/templates"
import { pong } from "../generated/PoolFactory/PoolFactory"

export function handPong(event: pong): void {

}

export function handlePoolDeploy(event: poolDeploy): void {
  poolContract.create(event.params.addr);
}

export function handleNewPoolEvent(event: newPoolEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Pool.load(event.params.poolId.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Pool(event.params.poolId.toHex())
    entity.poolId = event.params.poolId
    entity.poolAddr = event.params.poolAddress
    entity.LPAddr = event.params.LPTokenAddr
    entity.totalTokenNum = event.params.tokenAddresses.length
    entity.tokenAddresses = (event.params.tokenAddresses).map<Bytes>(item => <Bytes>(item))
    entity.tokenNames = event.params.tokenNames
    entity.name = event.params.poolName
    entity.ticker = event.params.poolTicker
    entity.sigma = event.params.sigma
    entity.eta = event.params.eta

    //initialize empty reserves
    entity.reserves = new Array<BigInt>()
    for(let i=0; i<entity.tokenAddresses.length; ++i){
        entity.reserves[i] = new BigInt(0);
    }
  }

  // Entities can be written to the store with `.save()`
  entity.save()
}


export function handleAddedLiquidityEvent(event: addedLiquidityEvent): void {
    let entity = Pool.load(event.params.id.toHex())

    if(entity){
      const amountsArr = event.params.amountsArr

      //update reserves
      for(let i=0; i<amountsArr.length; ++i){
          if(entity.reserves)
            entity.reserves[i] = entity.reserves[i].plus(amountsArr[i]);
      }
      entity.save()
    }    
}

export function handleLPTransfer(event: Transfer): void {
  let userTo = User.load(event.params.to.toHex())
  if(!userTo){
    userTo = new User(event.params.to.toHex())
    userTo.walletAddr = event.params.to
    userTo.tokens = new Array<string>()
  }
  
  let userFrom = User.load(event.params.from.toHex())
  if(!userFrom){
    userFrom = new User(event.params.from.toHex())
    userFrom.walletAddr = event.params.from
    userFrom.tokens = new Array<string>()
  }

  let ToBalKey = event.address.toHex().concat(userTo.walletAddr.toHex())
  let userToBal = TokenBalance.load(ToBalKey)
  if(!userToBal){
    userToBal = new TokenBalance(ToBalKey)
    userTo.tokens.push(ToBalKey)
    userToBal.balance = new BigInt(0)
  }
    
  let FromBalKey = event.address.toHex().concat(userFrom.walletAddr.toHex())
  let userFromBal = TokenBalance.load(FromBalKey)
  if(!userFromBal){
    userFromBal = new TokenBalance(FromBalKey)
    userFrom.tokens.push(FromBalKey)
    userFromBal.balance = new BigInt(0)
  }

  userToBal.balance.plus(event.params.value)
  userFromBal.balance.minus(event.params.value)

}



  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.newPool(...)