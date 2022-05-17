const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    possword:"123123",
    host:"localhost",
    post:5432,
    database:'Lab9'
})

module.exports = pool