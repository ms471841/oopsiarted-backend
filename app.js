import express from "express";
import cors from "cors";
import { config } from "dotenv";
import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";

//routes imports
import post from "./routes/postRoute.js";
import ErrorMiddleware from "./middlewares/error.js";
//for local host only
config({
  path: "./config/config.env",
});

const app = express();
const whitelist = [process.env.FRONTEND_URL, process.env.LOCAL_HOST];
const corsOptions = {
  credentials: true, // This is important.
  methods: ["GET", "POST", "DELETE", "PUT"],

  origin: (origin, callback) => {
    if (whitelist.includes(origin)) return callback(null, true);

    callback(new Error("Not allowed by CORS"));
  },
};

app.use(cors(corsOptions));
// app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
//routes
app.use(post);
//default route
app.get("/", (req, res) => {
  res.send("hooray! server is working");
});

export default app;
app.use(ErrorMiddleware);
