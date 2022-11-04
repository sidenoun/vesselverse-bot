import { config } from "./config";
import { AuctionCreatedEvent } from "./types";

/**
 * Listens to `AuctionCreated` event.
 * Example: https://etherscan.io/tx/0x6b835bede3ace526dc0867faac0684721c47a014c96bc7d7c8fbcb71b7e3e4e4#eventlog
 */
export const auctionCreatedEvent: AuctionCreatedEvent = {
  address: config.CONTRACT_ADDRESS,
  topics: [
    "0xd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca",
  ],
};
