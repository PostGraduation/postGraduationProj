const {Client} = require("pg")

const client = new Client ({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"0000",
    database:"exploreTN"
})

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
})

module.exports = client ;