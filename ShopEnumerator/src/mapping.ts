import { BigInt } from "@graphprotocol/graph-ts";
import {
  shop,
  ApprovalForAll,
  ItemsAdded,
  ItemsPurchased,
  OwnershipTransferred,
  PriceChanged,
  TransferBatch,
  TransferSingle,
  URI,
} from "../generated/shop/shop";
import {
  ExampleEntity,
  ItemsAdded as ItemsAddedEntity,
} from "../generated/schema";

export function handleApprovalForAll(event: ApprovalForAll): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0);
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1);

  // Entity fields can be set based on event parameters
  entity.account = event.params.account;
  entity.operator = event.params.operator;

  // Entities can be written to the store with `.save()`
  entity.save();

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
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.isApprovedForAll(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.owner(...)
  // - contract.supportsInterface(...)
  // - contract.uri(...)
}

export function handleItemsAdded(event: ItemsAdded): void {
  let entity = ItemsAddedEntity.load(event.transaction.hash.toHex());
  if (!entity) {
    entity = new ItemsAddedEntity(event.transaction.hash.toHex());
    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0);
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1);

  // Entity fields can be set based on event parameters
  entity.articule = event.params.articule;
  entity.amount = event.params.amount;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleItemsPurchased(event: ItemsPurchased): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePriceChanged(event: PriceChanged): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}
