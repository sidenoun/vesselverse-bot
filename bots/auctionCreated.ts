import { alchemyClient } from "../src/clients";
import { auctionCreatedEvent } from "../src/events";
import { postAuction } from "../service/social";
import { getVesselAuctionId } from "../utils";
import { Transaction } from "../src/types";

/**
 * Handle New Auction
 */
const handleNewAuction = async (transaction: Transaction) => {
  const id = getVesselAuctionId(transaction.topics[1]);

  await postAuction(id, ["twitter"]);
};

console.log("Listening...");
alchemyClient.ws.on(auctionCreatedEvent, handleNewAuction);
