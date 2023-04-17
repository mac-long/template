import Database from 'better-sqlite3';

const db = new Database('src/lib/data.db', {fileMustExist: true});

export function getAll() {
  return db.prepare(`SELECT * FROM users`).all();
}
