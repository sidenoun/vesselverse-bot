import { socialPostClient } from "../src/clients";

/**
 * Post New Auction
 *
 * @param id ID of Auction
 * @param platforms Platforms to Post
 * @returns Buffer of Canvas
 */
export const postAuction = async (id: string, platforms: string[]) => {
  const post = await socialPostClient
    .post({
      post: postAuctionText(id),
      mediaUrls: [
        `https://vesselverse.s3.amazonaws.com/vesselverse/images/${id}_1500.jpg`,
      ],
      platforms,
    })
    .catch(console.error)
    .then((res) => console.log(res));
};

/**
 * Text for New Auction
 *
 * @param id ID of Auction
 * @returns Text to be used for New Auction
 */
const postAuctionText = (id: string): string => {
  return `🏀 Bleep Bloop Blop 🏀
        
    An auction has started for Vessel - #${id}
    Learn more at https://www.vesselverse.io/`;
};
