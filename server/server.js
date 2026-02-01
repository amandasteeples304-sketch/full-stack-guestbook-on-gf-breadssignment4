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
  const data = await db.query("SELECT * FROM gfbread;");
  const gfBread = data.rows;
  console.log(request);
  response.status(200).json(gfBread);
});

app.post("/gfbread", async (request, response) => {
  console.log(request.body);
  // const nameFromClient = request.body.name;
  // const breadFromClient = request.body.bread;
  // const opinionFromClient = request.body.opinion;
  const dbQuery = await db.query(
    `INSERT INTO gfbread (name, bread, opinion) VALUES ($1, $2, $3);`,
    [request.body.name, request.body.bread, request.body.opinion],
  );
  response.status(200).json({ message: "GF Bread Guestbook entry created" });
});

app.listen(process.env.PORT || 5432, () => {
  console.log("Server is alive on http://server-fmc0.onrender.com");
});
