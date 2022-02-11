import mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

const port = process.env.DB_PORT ? +process.env.DB_PORT : undefined

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: port,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
})
