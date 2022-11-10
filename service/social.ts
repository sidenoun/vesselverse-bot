import { socialPostClient } from "../src/clients";
import { formatEther, shortAddress } from "../utils";

/**
 * Post New Auction
 *
 * @param id ID of Auction
 * @param platforms Platforms to Post
 */
export const postAuction = async (id: string, platforms: string[]) => {
  await socialPostClient
    .post({
      post: postAuctionText(id),
      mediaUrls: [
        `https://vesselverse.s3.amazonaws.com/vesselverse/images/${id}_1500.jpg`,
      ],
      platforms,
      shortenLinks: false,
    })
    .catch(console.error)
    .then((res: any) => console.log(res));
};

/**
 * Post New Bid
 *
 * @param id ID of Top Level Post
 * @param auctionId ID of Auction
 * @param amount Amount of Bid
 * @param address Address of Bidder
 * @param platforms Platforms to Post
 */
export const postBid = async (
  id: string,
  auctionId: string,
  amount: number,
  address: string,
  platforms: string[]
) => {
  await socialPostClient
    .postComment({
      id,
      comment: postBidText(auctionId, amount, address),
      platforms,
    })
    .catch(console.error)
    .then((res: any) => console.log(res));
};

/**
 * Text for New Auction
 *
 * @param id ID of Auction
 */
const postAuctionText = (id: string): string => {
  return `🏀 Bleep Bloop Blop 🏀\n\nAn auction has started for Vessel - #${id}\nLearn more at https://www.vesselverse.io/`;
};

/**
 * Text for New Bid
 *
 * @param id ID of Auction
 * @param amount Amount of Bid
 * @param address Address of Bidder
 */
const postBidText = (id: string, amount: number, address: string): string => {
  return `Vessel #${id} has received a bid of Ξ${formatEther(
    amount
  )} from ${shortAddress(address)}`;
};

/**
 * Test Post
 *
 * @param text Text to Post
 * @param media Media (images) to Post
 * @param platforms Platforms to Post
 */
export const testPost = async (
  text: string,
  media: string[],
  platforms: string[]
) => {
  await socialPostClient
    .post({
      post: text,
      mediaUrls: media,
      platforms,
      shortenLinks: false,
    })
    .catch(console.error)
    .then((res: any) => console.log(res));
};

/**
 * Test Comment
 *
 * @param id Top Level ID
 * @param comment Text to Post
 * @param platforms Platforms to Post
 */
export const testComment = async (
  id: string,
  comment: string,
  platforms: string[]
) => {
  await socialPostClient
    .postComment({
      id,
      comment,
      platforms,
      shortenLinks: false,
    })
    .catch(console.error)
    .then((res: any) => console.log(res));
};
