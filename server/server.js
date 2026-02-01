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

app.get("/gfbread", async (request, response) => {
  const gfBread = await db.query("SELECT * FROM gfbread;");
  console.log(request);
  response.json(gfBread.rows);
});

app.post("/gfbread", async (request, response) => {
  console.log(request.body);
  const nameFromClient = request.body.name;
  const breadFromClient = request.body.bread;
  const opinionFromClient = request.body.opinion;
  const data = db.query(
    `INSERT INTO gfbread (msg_name, bread_brand, opinion) VALUES ($1, $2, $3);`,
    [nameFromClient, breadFromClient, opinionFromClient],
  );
  response.status(201).json({ message: "GF Bread Guestbook entry created" });
});

app.listen(8080, () => {
  console.log("Server is alive on https://server-fmc0.onrender.com");
});
