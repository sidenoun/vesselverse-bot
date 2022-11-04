export interface Dimensions {
  width: number;
  height: number;
}

export interface Transaction {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;
  removed: boolean;
  address: string;
  data: string;
  topics: string[];
  transactionHash: string;
  logIndex: number;
}

export interface Config {
  ALCHEMY_API_KEY: string;
  CONTRACT_ADDRESS: string;
  TWITTER_APP_KEY: string;
  TWITTER_APP_SECRET: string;
  TWITTER_ACCESS_TOKEN: string;
  TWITTER_ACCESS_SECRET: string;
}

export interface AuctionCreatedEvent {
  address: string;
  topics: string[];
}
