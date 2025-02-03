import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config({});
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hhelelel");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
