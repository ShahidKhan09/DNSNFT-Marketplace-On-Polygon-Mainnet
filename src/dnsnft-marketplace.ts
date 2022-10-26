import { BigInt } from "@graphprotocol/graph-ts"
import {
  AuctionMade as AuctionMadeEvent,
  BidCancelled as BidCancelledEvent,
  BidClaimed as BidClaimedEvent,
  BidMade as BidMadeEvent,
  ChangedFeePercentages as ChangedFeePercentagesEvent,
  ChangedMarketplaceFeeWallet as ChangedMarketplaceFeeWalletEvent,
  ChangedWordsNFTAddress as ChangedWordsNFTAddressEvent,
  Claimed as ClaimedEvent,
  ClaimedAndNoBidsMade as ClaimedAndNoBidsMadeEvent,
  ERC721Received as ERC721ReceivedEvent,
  Expired as ExpiredEvent,
  ExpiredAndNoBidsMade as ExpiredAndNoBidsMadeEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/DNSNFTMarketplace/DNSNFTMarketplace"
import { 
  AuctionMade,
  BidCancelled,
  BidClaimed,
  BidMade,
  ChangedFeePercentages,
  ChangedMarketplaceFeeWallet,
  ChangedWordsNFTAddress,
  Claimed,
  ClaimedAndNoBidsMade,
  ERC721Received,
  Expired,
  ExpiredAndNoBidsMade,
  OwnershipTransferred
 } from "../generated/schema"

 export function handleAuctionMade(event: AuctionMadeEvent): void {
  let entity = new AuctionMade(event.transaction.from.toHex())
  entity._minter = event.params._minter
  entity._mintTime = event.params._mintTime
  entity._initialExpiryTime = event.params._initialExpiryTime
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleBidCancelled(event: BidCancelledEvent): void {
  let entity = new BidCancelled(event.transaction.from.toHex())
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleBidClaimed(event: BidClaimedEvent): void {
  let entity = new BidClaimed(event.transaction.from.toHex())
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity._tokenId = event.params._tokenId
  entity._totalBalance = event.params._totalBalance
  entity.save()
}

export function handleBidMade(event: BidMadeEvent): void {
  let entity = new BidMade(event.transaction.from.toHex())
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity._tokenId = event.params._tokenId
  entity._totalBalance = event.params._totalBalance
  entity.save()
}

export function handleChangedFeePercentages(
  event: ChangedFeePercentagesEvent
): void {
  let entity = new ChangedFeePercentages(event.transaction.from.toHex())
  entity._marketplacePercentage = event.params._marketplacePercentage
  entity._minterPercentage = event.params._minterPercentage
  entity.save()
}

export function handleChangedMarketplaceFeeWallet(
  event: ChangedMarketplaceFeeWalletEvent
): void {
  let entity = new ChangedMarketplaceFeeWallet(event.transaction.from.toHex())
  entity._marketplaceFeeWallet = event.params._marketplaceFeeWallet
  entity.save()
}

export function handleChangedWordsNFTAddress(
  event: ChangedWordsNFTAddressEvent
): void {
  let entity = new ChangedWordsNFTAddress(event.transaction.from.toHex())
  entity._wordsNFTAddress = event.params._wordsNFTAddress
  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(event.transaction.from.toHex())
  entity._bidder = event.params._bidder
  entity._minter = event.params._minter
  entity._amount = event.params._amount
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleClaimedAndNoBidsMade(event: ClaimedAndNoBidsMadeEvent): void {
  let entity = new ClaimedAndNoBidsMade(event.transaction.from.toHex())
  entity._minter = event.params._minter
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleERC721Received(event: ERC721ReceivedEvent): void {
  let entity = new ERC721Received(event.transaction.from.toHex())
  entity._operator = event.params._operator
  entity._to = event.params._to
  entity._tokenId = event.params._tokenId
  entity.data = event.params.data
  entity.save()
}

export function handleExpired(event: ExpiredEvent): void {
  let entity = new Expired(event.transaction.from.toHex())
  entity._bidder = event.params._bidder
  entity._minter = event.params._minter
  entity._amount = event.params._amount
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleExpiredAndNoBidsMade(event: ExpiredAndNoBidsMadeEvent): void {
  let entity = new ExpiredAndNoBidsMade(event.transaction.from.toHex())
  entity._minter = event.params._minter
  entity._tokenId = event.params._tokenId
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.from.toHex())
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
