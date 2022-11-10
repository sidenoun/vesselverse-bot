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
  SOCIAL_POST_API_KEY: string;
}

export interface AuctionCreatedEvent {
  address: string;
  topics: string[];
}
