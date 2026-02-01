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

app.get("/", (request, response) => {
  response.json({ message: "You've reached the GF Bread Guestbook server!" });
});

app.get("/gfBread", async (req, res) => {
  const gfBread = await db.query("SELECT * FROM gf_bread_guestbook");
  response.json(gfBread);
});

app.listen(8080, () => {
  console.log("Server is alive on https://server-fmc0.onrender.com");
});
