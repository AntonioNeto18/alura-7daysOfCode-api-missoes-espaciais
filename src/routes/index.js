import express from "express";
import missions from "./missionsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({ message: "Server is running" }));
    app.use(express.json(), missions);
};

export default routes;