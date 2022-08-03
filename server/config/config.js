module.exports = {
    port: process.env.PORT || 5000,
    db: {
        database: process.env.DB_NAME || 'Printers',
        user: process.env.DB_USER || 'Printers',
        password: process.env.DB_PASS || 'Printers',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './Printers.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
      }

}
