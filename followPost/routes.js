import * as dao from "./dao.js";
import * as postdao from "../explore/dao.js";
import * as userdao from "../user/dao.js";
function FollowsRoute(app) {
  const userFollowPost = async (req, res) => {
    const follower = req.session["currentUser"]._id;
    const followed = await postdao.findObservationByIdDao(
      parseInt(req.params.postid)
    );
    const observation_id = followed._id;
    // const followed = req.params["postid"];
    const newFollow = await dao.userFollowPostDao(follower, observation_id);
    res.json(newFollow);
  };
  const userUnfollowPost = async (req, res) => {
    const follower = req.session["currentUser"]._id;
    const followed = await postdao.findObservationByIdDao(
      parseInt(req.params.postid)
    );
    const observation_id = followed._id;
    const status = await dao.userUnfollowPostDao(follower, observation_id);
    res.json(status);
  };
  // return all the users that this post is followed by
  const findFollowersByPost = async (req, res) => {
    const followed = await postdao.findObservationByIdDao(
      parseInt(req.params.postid)
    );
    const observation_id = followed._id;

    const followers = await dao.findFollowersByPostDao(observation_id);
    //return all the users that follow specific post
    res.json(followers);
  };

  // find all the posts that 1 users follows
  const findPostThatUserFollows = async (req, res) => {
    const followed = await userdao.findUserByUserIdDao(parseInt(user_id));
    const user_id = followed._id;
    const postsFollowedByUser = await dao.findPostThatUserFollowsDao(user_id);
    res.json(postsFollowedByUser);
  }; // implement this in users/community client side

  app.post("/project/follows/:postid", userFollowPost);
  app.delete("/project/unfollows/:postid", userUnfollowPost);
  app.get("/project/followers/:postid", findFollowersByPost);
  app.get("/project/following/:userid", findPostThatUserFollows);
}

export default FollowsRoute;
