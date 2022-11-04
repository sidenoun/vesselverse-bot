import { alchemyClient } from "./clients";
import { auctionCreatedEvent } from "./events";
import { postNewAuctionTweet } from "../service/twitter";
import { getVesselAuctionId, getVesselAuctionImage } from "../utils";
import { Transaction } from "./types";

/**
 * Handle New Auction Tweet
 */
const handleNewAuctionTweet = async (transaction: Transaction) => {
  const id = getVesselAuctionId(transaction.topics[1]);
  const image = await getVesselAuctionImage(id);

  postNewAuctionTweet(id, image);
};

console.log("Listening...");
alchemyClient.ws.on(auctionCreatedEvent, handleNewAuctionTweet);
