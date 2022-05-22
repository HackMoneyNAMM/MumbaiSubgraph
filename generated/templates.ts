// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Pool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Pool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("Pool", [address.toHex()], context);
  }
}

export class LPToken extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LPToken", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("LPToken", [address.toHex()], context);
  }
}
