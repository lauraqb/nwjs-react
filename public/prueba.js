const db = require('better-sqlite3')('foobar.db', options);
 //Creates a new database connection. If the database file does not exist, it is created.
// const Database = require('better-sqlite3');
// const db = new Database('foobar.db', { verbose: console.log });
// const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
// console.log(row.firstName, row.lastName, row.email);

module.exports = {
    readJar : "readJar"
}