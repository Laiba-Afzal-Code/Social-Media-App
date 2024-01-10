const Post = require("../moduls/Post");
const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../moduls/User");
  // create a Post
  router.post("/createpost", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//Update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated Successfully");
    } else {
      res.status(403).json("You can Update only your's Post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete a Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("Post Deleted Successfully");
    } else {
      res.status(403).json("You can delete only your's Post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// like and dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.like.includes(req.body.userId)) {
      await post.updateOne({ $push: { like: req.body.userId } });
      res.status(200).json("This Post has been liked");
    } else {
      await post.updateOne({ $pull: { like: req.body.userId } });
      res.status(200).json("Post has been disLiked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get timeLine posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPost = await Post.find({ userId: currentUser._id });
    const friendsPost = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPost.concat(...friendsPost));
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
});

// get user's all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username});
    const post = await Post.find({userId: user._id});
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
});

module.exports = router;
