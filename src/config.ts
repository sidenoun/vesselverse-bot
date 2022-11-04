import dotenv from "dotenv";
import { Config } from "./types";

dotenv.config();

export const config: Config = {
  ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY ?? "",
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS ?? "",
  TWITTER_APP_KEY: process.env.TWITTER_APP_KEY ?? "",
  TWITTER_APP_SECRET: process.env.TWITTER_APP_SECRET ?? "",
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN ?? "",
  TWITTER_ACCESS_SECRET: process.env.TWITTER_ACCESS_SECRET ?? "",
};
