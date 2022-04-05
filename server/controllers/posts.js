import mongoose from "mongoose";
import Post from "../models/post.js";
import User from "../models/user.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await Post.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await Post.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await Post.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

export const addWish = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const user = await User.findById(req.userId);

  const index = user.wishlist.findIndex((result) => result === String(id));

  if (index === -1) {
    user.wishlist.push(id);
  } else {
    user.wishlist = user.wishlist.filter((result) => result != String(id));
  }

  const updatedUser = await User.findByIdAndUpdate(user._id, user, {
    new: true,
  });

  res.json(updatedUser);
};
