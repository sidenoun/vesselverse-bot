import { alchemyClient } from "../src/clients";
import { auctionBidEvent } from "../src/events";
import { Transaction } from "../src/types";

/**
 * Handle New Bid
 */
const handleNewBid = async (transaction: Transaction) => {
  console.log(transaction);
};

console.log("Listening...");
alchemyClient.ws.on(auctionBidEvent, handleNewBid);
