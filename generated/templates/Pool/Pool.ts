// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class addedLiquidityEvent extends ethereum.Event {
  get params(): addedLiquidityEvent__Params {
    return new addedLiquidityEvent__Params(this);
  }
}

export class addedLiquidityEvent__Params {
  _event: addedLiquidityEvent;

  constructor(event: addedLiquidityEvent) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountsArr(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get LPGiven(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class newPoolEvent extends ethereum.Event {
  get params(): newPoolEvent__Params {
    return new newPoolEvent__Params(this);
  }
}

export class newPoolEvent__Params {
  _event: newPoolEvent;

  constructor(event: newPoolEvent) {
    this._event = event;
  }

  get poolName(): string {
    return this._event.parameters[0].value.toString();
  }

  get poolTicker(): string {
    return this._event.parameters[1].value.toString();
  }

  get poolId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get LPTokenAddr(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get poolAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get tokenAddresses(): Array<Address> {
    return this._event.parameters[5].value.toAddressArray();
  }

  get tokenNames(): Array<string> {
    return this._event.parameters[6].value.toStringArray();
  }

  get sigma(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get eta(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class Pool extends ethereum.SmartContract {
  static bind(address: Address): Pool {
    return new Pool("Pool", address);
  }

  MINIMUM_LIQUIDITY(): BigInt {
    let result = super.call(
      "MINIMUM_LIQUIDITY",
      "MINIMUM_LIQUIDITY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MINIMUM_LIQUIDITY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MINIMUM_LIQUIDITY",
      "MINIMUM_LIQUIDITY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  Ufun(assetArr: Array<BigInt>): BigInt {
    let result = super.call("Ufun", "Ufun(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(assetArr)
    ]);

    return result[0].toBigInt();
  }

  try_Ufun(assetArr: Array<BigInt>): ethereum.CallResult<BigInt> {
    let result = super.tryCall("Ufun", "Ufun(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(assetArr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  UfunTest(arr: Array<BigInt>): BigInt {
    let result = super.call("UfunTest", "UfunTest(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(arr)
    ]);

    return result[0].toBigInt();
  }

  try_UfunTest(arr: Array<BigInt>): ethereum.CallResult<BigInt> {
    let result = super.tryCall("UfunTest", "UfunTest(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(arr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calcTokensToRelease(
    indexOfTokenGiven: BigInt,
    amountOfTokenGiven: BigInt,
    indexOfTargetToken: BigInt
  ): BigInt {
    let result = super.call(
      "calcTokensToRelease",
      "calcTokensToRelease(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(indexOfTokenGiven),
        ethereum.Value.fromUnsignedBigInt(amountOfTokenGiven),
        ethereum.Value.fromUnsignedBigInt(indexOfTargetToken)
      ]
    );

    return result[0].toBigInt();
  }

  try_calcTokensToRelease(
    indexOfTokenGiven: BigInt,
    amountOfTokenGiven: BigInt,
    indexOfTargetToken: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calcTokensToRelease",
      "calcTokensToRelease(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(indexOfTokenGiven),
        ethereum.Value.fromUnsignedBigInt(amountOfTokenGiven),
        ethereum.Value.fromUnsignedBigInt(indexOfTargetToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  diff(reserveArr: Array<BigInt>, changeInReserveArr: Array<BigInt>): BigInt {
    let result = super.call("diff", "diff(uint256[],uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(reserveArr),
      ethereum.Value.fromUnsignedBigIntArray(changeInReserveArr)
    ]);

    return result[0].toBigInt();
  }

  try_diff(
    reserveArr: Array<BigInt>,
    changeInReserveArr: Array<BigInt>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall("diff", "diff(uint256[],uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(reserveArr),
      ethereum.Value.fromUnsignedBigIntArray(changeInReserveArr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountProduct(): BigInt {
    let result = super.call(
      "getAmountProduct",
      "getAmountProduct():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getAmountProduct(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountProduct",
      "getAmountProduct():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEta(): BigInt {
    let result = super.call("getEta", "getEta():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getEta(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getEta", "getEta():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLPTokenAddr(): Address {
    let result = super.call("getLPTokenAddr", "getLPTokenAddr():(address)", []);

    return result[0].toAddress();
  }

  try_getLPTokenAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLPTokenAddr",
      "getLPTokenAddr():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getReserve(): Array<BigInt> {
    let result = super.call("getReserve", "getReserve():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_getReserve(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall("getReserve", "getReserve():(uint256[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getRootedAmount(): BigInt {
    let result = super.call(
      "getRootedAmount",
      "getRootedAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRootedAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRootedAmount",
      "getRootedAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSigma(): BigInt {
    let result = super.call("getSigma", "getSigma():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getSigma(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getSigma", "getSigma():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenBalance(): Array<BigInt> {
    let result = super.call(
      "getTokenBalance",
      "getTokenBalance():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getTokenBalance(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTokenBalance",
      "getTokenBalance():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getTokens(): Array<Address> {
    let result = super.call("getTokens", "getTokens():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getTokens", "getTokens():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTotalSupply(): BigInt {
    let result = super.call("getTotalSupply", "getTotalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTotalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalSupply",
      "getTotalSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalTokenNums(): BigInt {
    let result = super.call(
      "getTotalTokenNums",
      "getTotalTokenNums():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalTokenNums(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalTokenNums",
      "getTotalTokenNums():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getU(): BigInt {
    let result = super.call("getU", "getU():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getU(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getU", "getU():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mint(amounts: Array<BigInt>): BigInt {
    let result = super.call("mint", "mint(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    ]);

    return result[0].toBigInt();
  }

  try_mint(amounts: Array<BigInt>): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintTest(arr: Array<BigInt>): BigInt {
    let result = super.call("mintTest", "mintTest(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(arr)
    ]);

    return result[0].toBigInt();
  }

  try_mintTest(arr: Array<BigInt>): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mintTest", "mintTest(uint256[]):(uint256)", [
      ethereum.Value.fromUnsignedBigIntArray(arr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swap(
    indexOfTokenGiven: BigInt,
    amountOfTokenGiven: BigInt,
    indexOfTargetToken: BigInt
  ): BigInt {
    let result = super.call("swap", "swap(uint256,uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(indexOfTokenGiven),
      ethereum.Value.fromUnsignedBigInt(amountOfTokenGiven),
      ethereum.Value.fromUnsignedBigInt(indexOfTargetToken)
    ]);

    return result[0].toBigInt();
  }

  try_swap(
    indexOfTokenGiven: BigInt,
    amountOfTokenGiven: BigInt,
    indexOfTargetToken: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "swap",
      "swap(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(indexOfTokenGiven),
        ethereum.Value.fromUnsignedBigInt(amountOfTokenGiven),
        ethereum.Value.fromUnsignedBigInt(indexOfTargetToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unsignedDiv(x: BigInt, y: BigInt): BigInt {
    let result = super.call(
      "unsignedDiv",
      "unsignedDiv(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y)
      ]
    );

    return result[0].toBigInt();
  }

  try_unsignedDiv(x: BigInt, y: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unsignedDiv",
      "unsignedDiv(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unsignedMul(x: BigInt, y: BigInt): BigInt {
    let result = super.call(
      "unsignedMul",
      "unsignedMul(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y)
      ]
    );

    return result[0].toBigInt();
  }

  try_unsignedMul(x: BigInt, y: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unsignedMul",
      "unsignedMul(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unsignedPow(x: BigInt, y: BigInt): BigInt {
    let result = super.call(
      "unsignedPow",
      "unsignedPow(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y)
      ]
    );

    return result[0].toBigInt();
  }

  try_unsignedPow(x: BigInt, y: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unsignedPow",
      "unsignedPow(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unsignedSqrt(x: BigInt): BigInt {
    let result = super.call("unsignedSqrt", "unsignedSqrt(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(x)
    ]);

    return result[0].toBigInt();
  }

  try_unsignedSqrt(x: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unsignedSqrt",
      "unsignedSqrt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(x)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get poolName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get poolTicker(): string {
    return this._call.inputValues[2].value.toString();
  }

  get tokenNames(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get tokens_(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get total_token_num_(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get sigma_(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get eta_(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintTestCall extends ethereum.Call {
  get inputs(): MintTestCall__Inputs {
    return new MintTestCall__Inputs(this);
  }

  get outputs(): MintTestCall__Outputs {
    return new MintTestCall__Outputs(this);
  }
}

export class MintTestCall__Inputs {
  _call: MintTestCall;

  constructor(call: MintTestCall) {
    this._call = call;
  }

  get arr(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class MintTestCall__Outputs {
  _call: MintTestCall;

  constructor(call: MintTestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetUCall extends ethereum.Call {
  get inputs(): SetUCall__Inputs {
    return new SetUCall__Inputs(this);
  }

  get outputs(): SetUCall__Outputs {
    return new SetUCall__Outputs(this);
  }
}

export class SetUCall__Inputs {
  _call: SetUCall;

  constructor(call: SetUCall) {
    this._call = call;
  }

  get U(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetUCall__Outputs {
  _call: SetUCall;

  constructor(call: SetUCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get indexOfTokenGiven(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountOfTokenGiven(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get indexOfTargetToken(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}