// import path from 'path'

const path = require('path')

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  pool: {
    max: 50,
    min: 2,
    // acquireTimeout: 60 * 1000,
    // createTimeoutMillis: 30000,
    // acquireTimeoutMillis: 30000,
    // idleTimeoutMillis: 30000,
    // reapIntervalMillis: 1000,
    // createRetryIntervalMillis: 100,
    propagateCreateError: false // <- default is true, set to false
  },
  useNullAsDefault: true,
  debug: true
}
