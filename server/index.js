import express from "express";
import cors from "cors";

import db from "./db.js";

import userRouter from "./router/user.routes.js";
import subjectRouter from "./router/subject.routes.js";

const app = express();


// Database

db();


// Middleware

app.use(cors());

app.use(express.json());


// Test route

app.get("/", (req, res) => {

  res.send("Server is running");

});


// User routes

app.use(
  "/user",
  userRouter
);
app.use(
  "/subject",
  subjectRouter
);

// Server

app.listen(9999, () => {

  console.log("Server running on port 9999");

});