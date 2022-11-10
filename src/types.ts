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

export interface Event {
  address: string;
  topics: string[];
}

export interface AuctionBidEvent {
  bids: Bid[];
}

export interface Bid {
  transactionHash: string;
  logIndex: number;
  address: string;
  blockNumber: number;
  sender: string;
  value: number;
  vesselverseId: number;
  extended: boolean;
}

export interface PostsHistory {
  post: string;
  id: string;
}
