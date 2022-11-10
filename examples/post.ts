import { testPost } from "../service/social";

/**
 * Test Post
 */
const post = async () => {
  await testPost(
    "TEST\n\nAuctions alerts coming soon.",
    [`https://vesselverse.s3.amazonaws.com/vesselverse/images/1_1500.jpg`],
    ["twitter"]
  );
};

post();
