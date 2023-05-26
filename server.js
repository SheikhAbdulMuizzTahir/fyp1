import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/connectdb.js";
import bodyParser from "body-parser";

import { Job, Model, Recruiter, Review } from "./routes/index.js";

dotenv.config();
connectDB();

const app = Express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/models", Model);
app.use("/recruiters", Recruiter);
app.use("/jobs", Job);
app.use("/reviews", Review);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
