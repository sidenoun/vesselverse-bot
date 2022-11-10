import { testComment } from "../service/social";

/**
 * Test Comment
 */
const comment = async () => {
  await testComment(
    "XXXXX",
    "Vessel - 1 has received a bid of Ξ0.00 from 0x00...000",
    ["twitter"]
  );
};

comment();
