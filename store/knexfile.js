module.exports = {
  client: 'mysql',
  connection: process.env.DATABSE_URL || {
    user: 'root',
    password: 'sqlpass',
    database: 'wosofa'
  }
}
