import dotenv from "dotenv";
import { Config } from "./types";

dotenv.config();

export const config: Config = {
  ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY ?? "",
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS ?? "",
  SOCIAL_POST_API_KEY: process.env.SOCIAL_POST_API_KEY ?? "",
};
