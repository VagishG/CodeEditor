/** @format */
require('dotenv').config()
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

// Middleware to parse JSON bodie
app.use(express.text({ type: 'text/plain' }));
app.use(express.json());

// Static public folder
app.use(express.static("public"));
app.use(cors({ origin: true, credentials: true }));
// Applying CORS to specific routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

import authRoutes from "./routes/auth.routes";
app.use("/auth", authRoutes);

import userRoutes from "./routes/user.routes";
app.use("/user", userRoutes);

export default app;
