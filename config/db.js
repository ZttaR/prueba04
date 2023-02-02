const { createPool } = require('mysql2/promise')

const pool = createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '72211084',
//   port: 3306,
//   database: 'colegio'
  host: 'colegio1.c0zyii5nlweg.sa-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Qubittos=2017',
  port: 3306,
  database: 'colegio'
})

export { pool }
