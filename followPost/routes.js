import * as dao from "./dao.js";

function FollowsRoute(app) {
  const userFollowPost = async (req, res) => {
    const follower = req.session["currentUser"]._id;
    const followed = req.params.postid;
    // const followed = req.params["postid"];
    const newFollow = await dao.userFollowPostDao(follower, followed);
    res.json(newFollow);
  };
  const userUnfollowPost = async (req, res) => {
    const follower = req.session["currentUser"]._id;
    const followed = req.params.postid;
    const status = await dao.userUnfollowPostDao(follower, followed);
    res.json(status);
  };
  // return all the users that this post is followed by
  const findFollowersByPost = async (req, res) => {
    const followed = req.params.postid;
    const followers = await dao.findFollowersByPostDao(followed);
    //return all the users that follow specific post
    res.json(followers);
  };

  // find all the posts that 1 users follows
  const findPostThatUserFollows = async (req, res) => {
    const user_id = req.params.userid;
    const postsFollowedByUser = await dao.findPostThatUserFollowsDao(user_id);
    res.json(postsFollowedByUser);
  }; // implement this in users/community client side

  app.post("/project/follows/:postid", userFollowPost);
  app.delete("/project/unfollows/:postid", userUnfollowPost);
  app.get("/project/followers/:postid", findFollowersByPost);
  app.get("/project/following/:userid", findPostThatUserFollows);
}

export default FollowsRoute;
