import express from "express";
import routes from "./routes/index.js";
import db from "./database/connectDB.js";

db.on("connected", () => console.log("Conectado ao banco de dados"));

const app = express();
routes(app);

export default app;