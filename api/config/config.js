require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  post: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  apiKey: process.env.API_KEY,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  hostMail: process.env.HOSTMAIL || "",
  portMail: process.env.PORTMAIL || "",
  userMail: process.env.USERMAIL || "",
  passwordMail: process.env.PASSWORDMAIL || "",
  jwtKey: process.env.JWT_SECRET
}

module.exports = { config }
