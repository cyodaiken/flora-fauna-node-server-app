import model from "./model.js";

// follow user 
export const userFollowUserDao = (user_id1, user_id2) =>
    model.create({ follower: user_id1, followed: user_id2});

// unfollow user
export const userUnfollowUserDao = (user_id1, user_id2) =>
    model.deleteOne({ follower: user_id1, followed: user_id2 });

// find users that follow the user
export const findUsersThatFollowUserDao = (user_id) =>
    model.find({ followed: user_id}).populate("follower");

// find users that the user follows 
export const findUsersThatUserFollowsDao = (user_id) => 
    model.find({ follower: user_id}).populate("followed");

export const findUserByIdDao = (id) => model.findOne({ id: id});