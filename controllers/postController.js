import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Posts } from "../models/posts.js";
import ErrorHandler from "../utiles/ErrorHandler.js";

export const getAllPost = catchAsyncError(async (req, res, next) => {
  const posts = await Posts.find();
  res.status(200).json({
    success: true,
    posts,
  });
});

//admin
export const createPost = catchAsyncError(async (req, res, next) => {
  const { title, imageUrl } = req.body;
  if (!title || !imageUrl)
    return next(new ErrorHandler("Please add all fields", 400));

  await Posts.create({ title, imageUrl });
  res.status(200).json({
    success: true,
    message: "Post created successfully",
  });
});
