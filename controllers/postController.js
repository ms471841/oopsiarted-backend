import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Posts } from "../models/posts.js";
import getDataUri from "../utiles/dataUri.js";
import ErrorHandler from "../utiles/ErrorHandler.js";
import cloudinary from "cloudinary";
export const getAllPost = catchAsyncError(async (req, res, next) => {
  const posts = await Posts.find();
  res.status(200).json({
    success: true,
    posts,
  });
});

//admin
export const createPost = catchAsyncError(async (req, res, next) => {
  const { title } = req.body;

  const file = req.file;

  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  const imageUrl = mycloud.public_id;
  const url = mycloud.secure_url;

  Posts.create({ title, imageUrl, url });

  res.status(200).json({
    success: true,
    message: "Post created successfully",
  });
});
