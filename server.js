import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  const data = {
    appId: process.env.APP_ID,
    baseUrl: process.env.BASE_URL,
    mlModel: process.env.ML_MODEL,
    health: true,
  };
  res.json({
    data: data,
    message: "Health check pass !!! - Build and Deploy separation - main branch push check",
  });
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
