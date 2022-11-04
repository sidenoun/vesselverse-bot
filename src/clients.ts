import { config } from "./config";
import { Network, Alchemy } from "alchemy-sdk";
import TwitterApi from "twitter-api-v2";

/**
 * Alchemy Client
 */
export const alchemyClient: Alchemy = new Alchemy({
  apiKey: config.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
});

/**
 * Twitter Client
 */
export const twitterClient: TwitterApi = new TwitterApi({
  appKey: config.TWITTER_APP_KEY,
  appSecret: config.TWITTER_APP_SECRET,
  accessToken: config.TWITTER_ACCESS_TOKEN,
  accessSecret: config.TWITTER_ACCESS_SECRET,
});
