const path = require('path')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(path.resolve(__dirname, '..', 'data'))

module.exports = {}
const CREATE_INQUIRIES_TABLE_QUERY =
`CREATE TABLE IF NOT EXISTS inquiries (
  id INTEGER NOT NULL PRIMARY KEY,
  email TEXT,
  phone TEXT,
  inquiry TEXT,
  preferred_contact_method TEXT
);`

const createInquiryTable = () => {
  db.serialize(() => {
    db.run(CREATE_INQUIRIES_TABLE_QUERY)
  })
}

const CREATE_USER_TABLE_QUERY =
`CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL PRIMARY KEY,
  email TEXT,
  password TEXT,
  role TEXT
);`


module.exports = {
  ...module.exports,
  createInquiryTable,
}