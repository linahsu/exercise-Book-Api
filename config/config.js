const config = {
  username: 'root',
  password: 'password',
  database: 'booksDB',
  host: '127.0.0.1',
  dialect: 'mysql'
};

module.exports = {
  development: config,
  test: config,
  production: config,
};