import db from "./databaseConnect.js";
import sqlite3 from "sqlite3";

db.serialize(() => {
    db.run(`
            CREATE TABLE IF NOT EXISTS missions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(255) NOT NULL,
            crew INTEGER NOT NULL,
            spacecraft VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL,
            duration REAL NOT NULL
        )
    `)
}, (error) => console.error(`Erro ao criar tabela: ${error}`));

export default db;