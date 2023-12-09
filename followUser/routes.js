import * as dao from "./dao.js";
import * as userdao from "../user/dao.js";

function userFollows(app) {
    const userFollowUser = async (req, res) => {
        const follower = req.session["currentUser"]._id;
        const followed = await userdao.findUserByIdDao(
            parseInt(req.params.userid)
        );
    const newFollow = await dao.userFollowUserDao(follower, followed._id);
    res.json(newFollow);
    };

    const userUnfollowUser = async (req, res) => {
        const follower = res.session["currentUser"]._id;
        const followed = await userdao.findUserByIdDao(
            parseInt(req.params.userid)
        );
        const status = await dao.userUnfollowUserDao(follower, followed._id);
        res.json(status);
    };

    // Return followers of this user 
    const findUsersThatFollowUser = async(req, res) => {
        const followed = await userdao.findUserByIdDao(
            parseInt(req.params.postid)
        );
        const followers = await dao.findUsersThatFollowUserDao(followed._id);
        res.json(followers)
    };

    // Return users this user follows 
    const findUsersThatUserFollows = async(req, res) => {
        const id = req.params.userid;
        const followed = await userdao.findUserByUserIdDao(parseInt(id));

        const follows = await dao.findUsersThatUserFollowsDao(user_id);
        res.json(follows)
    };

    app.post("/project/follows/:userid", userFollowUser);
    app.delete("/project/unfollows/:userid", userUnfollowUser);
    app.get("/project/followers/:userid", findUsersThatFollowUser);
    app.get("/project/following/:userid", findUsersThatFollowUser);

}

export default userFollows; 