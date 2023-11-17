import express from "express";
export const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
