import { createCanvas, loadImage } from "canvas";
import { Dimensions } from "../src/types";

const canvas = createCanvas(1500, 1500);
const ctx = canvas.getContext("2d");

const dimensions: Dimensions = {
  width: 1500,
  height: 1500,
};

/**
 * Get Vessel Auction Image
 *
 * @param id ID of Auction
 * @returns Buffer of Canvas
 */
export const getVesselAuctionImage = async (id: string): Promise<Buffer> => {
  return loadImage(
    `https://vesselverse.s3.amazonaws.com/vesselverse/images/${id}_1500.jpg`
  ).then((image) => {
    ctx.drawImage(image, 0, 0, dimensions.width, dimensions.height);

    return canvas.toBuffer("image/png");
  });
};
