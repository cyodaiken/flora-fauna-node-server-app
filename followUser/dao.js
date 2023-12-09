import model from "./model.js";

// follow user 
export const userFollowUserDao = (user_id, user_id) =>
    model.create({ follower: user_id, followed: user_id});

// unfollow user
export const userUnfollowUserDao = (user_id, post_id) =>
    model.deleteOne({ follower: user_id, followed: user_id });

// find users that follow the user
export const findUsersThatFollowUserDao = (post_id) =>
    model.find({ followed: user_id}).populate("follower");

// find users that the user follows 
export const findUsersThatUserFollowsDao = (user_id) => 
    model.find({ follower: user_id}).populate("followed");

export const findUserByIdDao = (id) => model.findOne({ id: id});