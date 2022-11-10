import { socialPostClient } from "../src/clients";

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
    })
    .catch(console.error)
    .then((res: any) => console.log(res));
};
