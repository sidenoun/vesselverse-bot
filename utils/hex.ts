/**
 * Get Vessel Auction ID
 *
 * @param topic Topic from Alchemy
 * @returns ID of Vessel Auction
 */
export const getVesselAuctionId = (topic: string): string => {
  return BigInt(topic).toString();
};
