import * as dao from "./dao.js";
import * as postdao from "../explore/dao.js";
import * as userdao from "../user/dao.js";
import { parse } from "dotenv";
function LikeDislikeRoute(app) {
  //get data if user likes post or not
  const getLikeDataForPost = async (req, res) => {
    try {
      //get observation id
      const post_id = parseInt(req.params.post_id, 10);
      const obs = await postdao.findObservationByIdDao(post_id);
      const user = req.session["currentUser"]._id;
      const response = await dao.findLikeByUserForPostDao(user._id, post_id);
      res.json(response);
    } catch (err) {
      console.log("ERROR HERE :: ");
      console.log(err.message);
    }
  };
  app.get("/project/explore/:post_id/likedislike", getLikeDataForPost);

  //create a like & dislike
  const manageLikeDislikeForPost = async (req, res) => {
    const post_id = parseInt(req.params.post_id, 10);
    const obs = await postdao.findObservationByIdDao(post_id);
    const user_id = parseInt(req.params.user_id, 10);
    const user = await userdao.findUserByIdDao(user_id);
    const boolParam = req.params.like;
    const like = boolParam === "true";
    console.log("likedislike : ", boolParam);
    console.log("like :: ", like);
    let response;

    try {
      //check if record exits for the user and post
      const rec_exists = await dao.findLikeByUserForPostDao(user._id, obs._id);
      if (rec_exists) {
        response = await dao.updateRecordForLikeDislike(
          user._id,
          obs._id,
          like
        );
      } else {
        response = await dao.createNewRecord(user._id, obs._id, like);
      }
    } catch (error) {
      // Error handling
      console.log(error.message);
      return res.status(500).json({ message: "An error occurred", error });
    }
    console.log("like dislike response ", response);
    res.json(response);
  };
  app.post(
    "/project/explore/:post_id/likedislike/:user_id/:like",
    manageLikeDislikeForPost
  );
}
export default LikeDislikeRoute;
