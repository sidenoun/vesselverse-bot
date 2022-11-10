import { alchemyClient } from "../src/clients";
import { auctionBidEvent } from "../src/events";
import { getPostsHistory, postBid } from "../service/social";
import {
  getVesselAuctionId,
  getAuctionPost,
  getVesselAuctionBids,
} from "../utils";
import { Transaction } from "../src/types";

/**
 * Handle New Bid
 */
const handleNewBid = async (transaction: Transaction) => {
  const auctionId = getVesselAuctionId(transaction.topics[1]);
  const history = await getPostsHistory();

  const posts = getAuctionPost(history, auctionId);

  if (posts.length > 0) {
    const id = posts[0].id;

    const bids = await getVesselAuctionBids(auctionId);
    const bid = bids.bids[bids.bids.length - 1];

    const amount = bid.value;
    const address = bid.sender;

    await postBid(id, auctionId, amount, address, ["twitter"]);
  }
};

console.log("Listening...");
alchemyClient.ws.on(auctionBidEvent, handleNewBid);
