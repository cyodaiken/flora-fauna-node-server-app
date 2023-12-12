import model from "./model.js";

//follow post
export const findLikeByUserForPostDao = (user_id, post_id) =>
  model.findOne({ user: user_id, post: post_id });

export const createNewRecord = (user_id, post_id, like) =>
  model.create({ user: user_id, post: post_id, like: like });

export const updateRecordForLikeDislike = (user_id, post_id, like) =>
  model.updateOne({ user: user_id, post: post_id }, { $set: { like: like } });

export const getLikeDislikeCountForPost = (post_id) =>
  model.find({ post: post_id });
