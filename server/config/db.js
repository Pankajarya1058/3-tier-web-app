const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql',             // Use service name if running in Docker
  user: 'root',
  password: 'password',      // Replace with your actual password
  database: 'test_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');

  // Automatically execute the CREATE TABLE query
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      role ENUM('Admin', 'User') NOT NULL
    );
  `;

  db.query(createUsersTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating users table:', err.message);
    } else {
      console.log('Users table ensured (created if not exists).');
    }
  });
});

module.exports = db;

