import express from "express";
import Post from "../models/postModel.js";

const app = express();
const router = new express.Router();

// @desc    Share Post
// @route   POST /sharepost
// @access  User

const sharePost = async (req, res) => {
  const post = new Post(req.body);
  await post
    .save()
    .then(async () => {
      res.send({ post }).status(200);
    })
    .catch((e) => {
      console.log(e);
      res.send(e.message).status(401);
    });
};

// @desc    Delete Post
// @route   POST /deletepost
// @access  User

const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.body.post_id);
  await post
    .save()
    .then(async () => {
      res.send({ post }).status(200);
    })
    .catch((e) => {
      console.log(e);
      res.send(e.message).status(401);
    });
};

export { sharePost, deletePost };
