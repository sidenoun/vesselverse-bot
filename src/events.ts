import { config } from "./config";
import { Event } from "./types";

/**
 * Listens to `AuctionCreated` event.
 * Example: https://etherscan.io/tx/0x6b835bede3ace526dc0867faac0684721c47a014c96bc7d7c8fbcb71b7e3e4e4#eventlog
 */
export const auctionCreatedEvent: Event = {
  address: config.CONTRACT_ADDRESS,
  topics: [
    "0xd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca",
  ],
};

/**
 * Listens to `AuctionBid` event.
 * Example: https://etherscan.io/tx/0xc0099edd3522516dc0dbc73e1fc9712913bf09ffc90c859d410157242d325bef#eventlog
 */
export const auctionBidEvent: Event = {
  address: config.CONTRACT_ADDRESS,
  topics: [
    "0x1159164c56f277e6fc99c11731bd380e0347deb969b75523398734c252706ea3",
  ],
};
