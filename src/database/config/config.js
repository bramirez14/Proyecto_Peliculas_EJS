module.exports = {
  "development": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": process.env.PORT,
    "define": {
      "underscored": true,
      "paranoid": true,
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
  }
}
