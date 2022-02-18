import { KeyDB } from '../database/db'
import { RowDataPacket } from 'mysql2'

// eslint-disable-next-line no-unused-vars
export class ApiKey {
  private id: number;
  private key: string;
  private lastUse?: Date;

  constructor (id: number, key: string) {
    this.id = id
    this.key = key
  }

  getKey (): string {
    this.lastUse = new Date()
    return this.key
  }

  getLastUse (): Date | undefined {
    return this.lastUse
  }

  static findAll = (callback: Function) => {
    const db = KeyDB.getConnection()

    const queryString = `
      SELECT o.id, o.key
      FROM opensea_api AS o`

    db.query(queryString, (err, result) => {
      if (err) { callback(err) }

      const rows = <RowDataPacket[]> result
      const keys: ApiKey[] = []

      if (rows) {
        rows.forEach(row => {
          const key: ApiKey = new ApiKey(row.id, row.key)
          keys.push(key)
        })
      }
      callback(null, keys)
    })

    db.end()
  }
}
