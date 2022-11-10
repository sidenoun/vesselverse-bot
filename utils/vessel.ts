import axios from "axios";
import { hexToString } from ".";
import { AuctionBidEvent, PostsHistory } from "../src/types";

/**
 * Get Vessel Auction ID
 *
 * @param hex Hexadecimal from Alchemy
 */
export const getVesselAuctionId = (hex: string): string => {
  return hexToString(hex);
};

/**
 * Get Vessel Auction Bids
 *
 * @param id Vessel ID
 */
export const getVesselAuctionBids = async (
  id: string
): Promise<AuctionBidEvent> => {
  const { data } = await axios.get(
    `https://uma9k5bxmi.execute-api.us-east-1.amazonaws.com/Prod/auctions/${id}`
  );

  return data;
};

/**
 * Get Vessel Auction Post
 *
 * @param history Posts History
 * @param id Vessel ID
 */
export const getAuctionPost = (
  history: PostsHistory[],
  id: string
): PostsHistory[] => {
  return history.filter((item) =>
    item.post.includes(`An auction has started for Vessel - #${id}`)
  );
};
