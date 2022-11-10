// @ts-ignore
import SocialPost from "social-post-api";
import { Network, Alchemy } from "alchemy-sdk";
import { config } from "./config";

/**
 * Alchemy Client
 */
export const alchemyClient: Alchemy = new Alchemy({
  apiKey: config.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
});

/**
 * Social Post Client
 */
export const socialPostClient: SocialPost = new SocialPost(
  config.SOCIAL_POST_API_KEY
);
