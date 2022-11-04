import { twitterClient } from "../src/clients";

/**
 * Post New Auction Tweet
 *
 * @param id ID of Auction
 * @param image Buffer of Auction Image
 * @returns Buffer of Canvas
 */
export const postNewAuctionTweet = async (id: string, image: Buffer) => {
  if (image) {
    const mediaId = await twitterClient.v1.uploadMedia(image, { type: "png" });
    const tweet = await twitterClient.v1.tweet(postNewAuctionText(id), {
      media_ids: mediaId,
    });

    console.log(`New Auction Tweet ID: ${tweet.id_str}`);
  }
};

/**
 * Text for New Auction Tweet
 *
 * @param id ID of Auction
 * @returns Text to be used for New Auction Tweet
 */
const postNewAuctionText = (id: string): string => {
  return `🏀 Bleep Bloop Blop 🏀
        
    An auction has started for Vessel - #${id}
    Learn more at https://www.vesselverse.io/`;
};
