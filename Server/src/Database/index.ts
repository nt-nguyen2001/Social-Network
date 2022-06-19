import mysql, { Pool } from "mysql2";
export class DB {
  private static __instance: DB;
  private pool: Pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
  });
  private constructor() {}
  public static getInstance() {
    if (this.__instance == null) {
      return (this.__instance = new DB());
    }
    return this.__instance;
  }

  public _execute(query: string, values?: any) {
    return new Promise((resolve, reject) => {
      this.pool.execute(query, values ?? [], (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }
}
