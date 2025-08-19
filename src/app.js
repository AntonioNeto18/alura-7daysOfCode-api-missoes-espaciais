import express from "express";
import routes from "./routes/index.js";
import db from "./database/connectDB.js";
import { error, genericError } from "./middlewares/errorMiddleware.js";
import pageNotFound from "./middlewares/pageNotFoundMiddleware.js";

db.on("connected", () => console.log("Conectado ao banco de dados"));

const app = express();
routes(app);

app.use(error);
app.use(genericError);
app.use(pageNotFound);

export default app;