import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/DNSNFTMarketplace/DNSNFTMarketplace"

export function createAuctionMadeEvent(
  _minter: Address,
  _mintTime: BigInt,
  _initialExpiryTime: BigInt,
  _tokenId: BigInt
): AuctionMade {
  let auctionMadeEvent = changetype<AuctionMade>(newMockEvent())

  auctionMadeEvent.parameters = new Array()

  auctionMadeEvent.parameters.push(
    new ethereum.EventParam("_minter", ethereum.Value.fromAddress(_minter))
  )
  auctionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_mintTime",
      ethereum.Value.fromUnsignedBigInt(_mintTime)
    )
  )
  auctionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_initialExpiryTime",
      ethereum.Value.fromUnsignedBigInt(_initialExpiryTime)
    )
  )
  auctionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return auctionMadeEvent
}

export function createBidCancelledEvent(
  _bidder: Address,
  _amount: BigInt,
  _tokenId: BigInt
): BidCancelled {
  let bidCancelledEvent = changetype<BidCancelled>(newMockEvent())

  bidCancelledEvent.parameters = new Array()

  bidCancelledEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  bidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  bidCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return bidCancelledEvent
}

export function createBidClaimedEvent(
  _bidder: Address,
  _amount: BigInt,
  _tokenId: BigInt,
  _totalBalance: BigInt
): BidClaimed {
  let bidClaimedEvent = changetype<BidClaimed>(newMockEvent())

  bidClaimedEvent.parameters = new Array()

  bidClaimedEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  bidClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  bidClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  bidClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalBalance",
      ethereum.Value.fromUnsignedBigInt(_totalBalance)
    )
  )

  return bidClaimedEvent
}

export function createBidMadeEvent(
  _bidder: Address,
  _amount: BigInt,
  _tokenId: BigInt,
  _totalBalance: BigInt
): BidMade {
  let bidMadeEvent = changetype<BidMade>(newMockEvent())

  bidMadeEvent.parameters = new Array()

  bidMadeEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  bidMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  bidMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  bidMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_totalBalance",
      ethereum.Value.fromUnsignedBigInt(_totalBalance)
    )
  )

  return bidMadeEvent
}

export function createChangedFeePercentagesEvent(
  _marketplacePercentage: i32,
  _minterPercentage: i32
): ChangedFeePercentages {
  let changedFeePercentagesEvent = changetype<ChangedFeePercentages>(
    newMockEvent()
  )

  changedFeePercentagesEvent.parameters = new Array()

  changedFeePercentagesEvent.parameters.push(
    new ethereum.EventParam(
      "_marketplacePercentage",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_marketplacePercentage))
    )
  )
  changedFeePercentagesEvent.parameters.push(
    new ethereum.EventParam(
      "_minterPercentage",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minterPercentage))
    )
  )

  return changedFeePercentagesEvent
}

export function createChangedMarketplaceFeeWalletEvent(
  _marketplaceFeeWallet: Address
): ChangedMarketplaceFeeWallet {
  let changedMarketplaceFeeWalletEvent = changetype<
    ChangedMarketplaceFeeWallet
  >(newMockEvent())

  changedMarketplaceFeeWalletEvent.parameters = new Array()

  changedMarketplaceFeeWalletEvent.parameters.push(
    new ethereum.EventParam(
      "_marketplaceFeeWallet",
      ethereum.Value.fromAddress(_marketplaceFeeWallet)
    )
  )

  return changedMarketplaceFeeWalletEvent
}

export function createChangedWordsNFTAddressEvent(
  _wordsNFTAddress: Address
): ChangedWordsNFTAddress {
  let changedWordsNftAddressEvent = changetype<ChangedWordsNFTAddress>(
    newMockEvent()
  )

  changedWordsNftAddressEvent.parameters = new Array()

  changedWordsNftAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_wordsNFTAddress",
      ethereum.Value.fromAddress(_wordsNFTAddress)
    )
  )

  return changedWordsNftAddressEvent
}

export function createClaimedEvent(
  _bidder: Address,
  _minter: Address,
  _amount: BigInt,
  _tokenId: BigInt
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("_minter", ethereum.Value.fromAddress(_minter))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return claimedEvent
}

export function createClaimedAndNoBidsMadeEvent(
  _minter: Address,
  _tokenId: BigInt
): ClaimedAndNoBidsMade {
  let claimedAndNoBidsMadeEvent = changetype<ClaimedAndNoBidsMade>(
    newMockEvent()
  )

  claimedAndNoBidsMadeEvent.parameters = new Array()

  claimedAndNoBidsMadeEvent.parameters.push(
    new ethereum.EventParam("_minter", ethereum.Value.fromAddress(_minter))
  )
  claimedAndNoBidsMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return claimedAndNoBidsMadeEvent
}

export function createERC721ReceivedEvent(
  _operator: Address,
  _to: Address,
  _tokenId: BigInt,
  data: Bytes
): ERC721Received {
  let erc721ReceivedEvent = changetype<ERC721Received>(newMockEvent())

  erc721ReceivedEvent.parameters = new Array()

  erc721ReceivedEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  erc721ReceivedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  erc721ReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  erc721ReceivedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return erc721ReceivedEvent
}

export function createExpiredEvent(
  _bidder: Address,
  _minter: Address,
  _amount: BigInt,
  _tokenId: BigInt
): Expired {
  let expiredEvent = changetype<Expired>(newMockEvent())

  expiredEvent.parameters = new Array()

  expiredEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  expiredEvent.parameters.push(
    new ethereum.EventParam("_minter", ethereum.Value.fromAddress(_minter))
  )
  expiredEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  expiredEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return expiredEvent
}

export function createExpiredAndNoBidsMadeEvent(
  _minter: Address,
  _tokenId: BigInt
): ExpiredAndNoBidsMade {
  let expiredAndNoBidsMadeEvent = changetype<ExpiredAndNoBidsMade>(
    newMockEvent()
  )

  expiredAndNoBidsMadeEvent.parameters = new Array()

  expiredAndNoBidsMadeEvent.parameters.push(
    new ethereum.EventParam("_minter", ethereum.Value.fromAddress(_minter))
  )
  expiredAndNoBidsMadeEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return expiredAndNoBidsMadeEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
