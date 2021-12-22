const Post = require("../models/Post");
const User = require("../models/User");
module.exports = {
  createPost: async (req, res) => {
    try {
      const newPost = new Post({
        userId: req.user._id,
        ...req.body,
      });

      console.log(newPost);
      const post = await newPost.save();
      const user = await User.findOne({ _id: req.user._id });
      user.posts = [...user.posts, post._id];
      user.save();
      res.json({ msg: "post created", post, user });
    } catch (error) {
      res.status(500).send("server error");
    }
  },
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json({ posts });
    } catch (error) {}
  },
  deletePost: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.idUser });
      const post = await Post.findOne({ _id: req.params.idPost });

      if (user._id.equals(post.userId)) {
        console.log("n");
        const postDeleted = await Post.findOneAndDelete({
          _id: req.params.idPost,
        });
        console.log(postDeleted);
      }
      res.json({ msg: "post deleted", postDeleted });
    } catch (error) {
      res.send("server error");
    }
  },
  editPost: async (req, res) => {
    try {
      const editedPost = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );

      res.json({ msg: "done", editedPost });
    } catch (error) {
      res.send("server error");
    }
  },
  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json({ msg: "post loaded", post });
    } catch (error) {
      res.send("server error");
    }
  },
};
