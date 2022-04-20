import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile1: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: [
    {
      type: Date,
      default: new Date(),
    },
  ],
  price: String,
  contact: String,
  furniture_tag: Boolean,
  electronic_tag: Boolean,
  book_tag: Boolean,
  music_tag: Boolean,
  sports_tag: Boolean,
});

const Post = mongoose.model("Post", postSchema);
export default Post;
