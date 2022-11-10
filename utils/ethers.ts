import { ethers } from "ethers";

/**
 * Hexadecimal to string
 *
 * @param hexadecimal Hexadecimal
 */
export const hexToString = (hexadecimal: string): string => {
  return BigInt(hexadecimal).toString();
};

/**
 * Format Ether
 *
 * @param value Hexadecimal
 */
export const formatEther = (value: number): string => {
  return ethers.utils.formatEther(value.toString());
};

/**
 * Short Address
 *
 * @param address Address
 */
export const shortAddress = (address: string) => {
  return address && [address.substr(0, 4), address.substr(38, 4)].join("...");
};
