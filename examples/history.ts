import { getPostsHistory } from "../service/social";

/**
 * Posts History
 */
const history = async () => {
  await getPostsHistory();
};

history();
