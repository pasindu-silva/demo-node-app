import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Health check pass - From the QA !!!" });
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
