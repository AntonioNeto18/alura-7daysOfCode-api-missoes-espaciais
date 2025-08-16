import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/database/db.db", (error) => {
    if (error) console.error(`Erro ao conectar com o banco: ${error.message}`);
    else console.log("Conectado ao sqlite");
})

export default db;