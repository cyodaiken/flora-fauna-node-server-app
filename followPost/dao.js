import model from "./model.js";

//follow post
export const userFollowPostDao = (user_id, post_id) =>
  model.create({ follower: user_id, followed: post_id });

//unfollow post
export const userUnfollowPostDao = (user_id, post_id) =>
  model.deleteOne({ follower: user_id, followed: post_id });

// find the followers that follow the post.
export const findFollowersByPostDao = (post_id) =>
  model.find({ followed: post_id }).populate("follower"); // populate is query  using ID to get the user object.

//find the posts that the user follows
export const findPostThatUserFollowsDao = (user_id) =>
  model.find({ follower: user_id }).populate("followed"); // populate is query  using ID to get the post object.
