import express from "express";
import routes from "./routes/index.js";
import db from "./database/connectDB.js";

db.on("connected", () => console.log("Conectado ao banco de dados"));

const app = express();
routes(app);

app.use((req, res) => res.status(404).json({ message: "Page Not Found", status: 404 }));


export default app;