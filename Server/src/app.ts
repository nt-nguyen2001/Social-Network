import express, { Application, Request, Response } from "express";
import { route } from "./Routes";
// require("dotenv").config({ path: __dirname + "/.env" });
import "dotenv/config";
const cors = require("cors");
const app: Application = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

route(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}`);
});
