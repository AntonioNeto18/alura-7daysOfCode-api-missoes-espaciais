import express from "express";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({ message: "Tudo ok" }));

    app.use(express.json());
}

export default routes;