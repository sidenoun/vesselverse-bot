import { alchemyClient } from "./clients";
import { auctionCreatedEvent } from "./events";
import { postAuction } from "../service/social";
import { getVesselAuctionId } from "../utils";
import { Transaction } from "./types";

/**
 * Handle New Auction Tweet
 */
const handleNewAuctionTweet = async (transaction: Transaction) => {
  const id = getVesselAuctionId(transaction.topics[1]);

  await postAuction(id, ["twitter"]);
};

console.log("Listening...");
alchemyClient.ws.on(auctionCreatedEvent, handleNewAuctionTweet);
