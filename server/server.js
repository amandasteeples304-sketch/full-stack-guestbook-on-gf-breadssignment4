import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.json({ message: "You're on my root route, how roode" });
});

app.listen(8080, () => {
  console.log("Server is alive on https://server-fmc0.onrender.com");
});
