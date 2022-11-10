/**
 * Get Vessel Auction ID
 *
 * @param topic Topic from Alchemy
 */
export const getVesselAuctionId = (topic: string): string => {
  return BigInt(topic).toString();
};
