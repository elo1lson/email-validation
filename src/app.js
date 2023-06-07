import express from "express";
import dotenv from "dotenv";
dotenv.config();

import loginRouter from "./routes/login.js";
import homeRouter from "./routes/home.js";
import accountRouter from "./routes/account.js";
import { resolve } from "path";
import { log } from "console";
import mongoose from "./config/mongoose.js";
const app = express();
app.use(express.static(resolve("public/styles")));
app.use(express.urlencoded({ extended: true }));
app.use("/login", loginRouter);
app.use("/account", accountRouter);
app.use("/", homeRouter);
app.listen(3000);
log(resolve("public"));
