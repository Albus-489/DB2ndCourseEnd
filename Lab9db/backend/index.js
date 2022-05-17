const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const Pool = require('pg').Pool

const app = express()

PORT = 3001

const connection = new Pool({
    user:"postgres",
    password:"123123",
    host:"localhost",
    port:5432,
    database:'Lab9'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// * GET ALL *
app.get('/Clients',(req,res) => {
    const query = "select * from clients";

    connection.query(query,(err,result)=>{
        console.log(err)
        res.send(result.rows)
    })
})
app.get('/Securities',(req,res) => {
    const query = "select * from securities";

    connection.query(query,(err,result)=>{
        console.log(err)
        res.send(result.rows)
    })
})
app.get('/Investments',(req,res) => {
    const query = "select * from investments";

    connection.query(query,(err,result)=>{
        console.log(err)
        res.send(result.rows)
    })
})

// * POST clients, invest, secur
app.post('/postClient', (req, res) => {
    console.log(req.body, 'createdata');

    let cName = req.body.cname;
    let cType = req.body.ctype;
    let cAddress = req.body.caddress;
    let cPhone = req.body.cphone;

    let qr = `INSERT INTO clients(cName, cType, cAddress, cPhone) values('${cName}', '${cType}', '${cAddress}', '${cPhone}')`;
    //let qr = `select * from clients;`
    connection.query(qr, (err, result) =>{
        if(err){console.log(err);}
        res.send({
              message:'Інформація додана'
        });
    })
})

app.post('/postSecur', (req, res) => {
    console.log(req.body, 'createdata');

    let cName = req.body.minimumamount;
    let cType = req.body.rating;
    let cAddress = req.body.profitability;
    let cPhone = req.body.additionalinfo;

    let qr = `INSERT INTO securities(minimumamount, rating, profitability, additionalinfo) values('${cName}', '${cType}', '${cAddress}', '${cPhone}')`;
    //let qr = `select * from clients;`
    connection.query(qr, (err, result) =>{
        if(err){console.log(err);}
        res.send({
              message:'Інформація додана'
        });
    })
})

app.post('/postInvest', (req, res) => {
    console.log(req.body, 'createdata');

    let cName = req.body.sid;
    let cType = req.body.cid;
    let cAddress = req.body.quotation;
    let dateofpurchase = req.body.dateofpurchase;
    let dateofsale = req.body.dateofsale;

    let qr = `INSERT INTO clients(sid, cid, quotation, dateofpurchase, dateofsale) values('${cName}', '${cType}', '${cAddress}', '${dateofpurchase}', '${dateofsale}')`;
    //let qr = `select * from clients;`
    connection.query(qr, (err, result) =>{
        if(err){console.log(err);}
        res.send({
              message:'Інформація додана'
        });
    })
})

// ! DELETE by ids
app.delete("/DeleteInvest/:Id", (req, res) => {
  const id = req.params.Id;
  const sqlDelete = `delete from investments where id = ${id}`;
  connection.query(sqlDelete, (err, result) => {
    if (err) {
      console.log(err, "\n DELETE -------- error");
    } else {
      res.send({
        message: "Дані успішно видалено!",
      });
    }
  });
});
app.delete("/DeleteClient/:Id", (req, res) => {
  const id = req.params.Id;
  const sqlDelete = `delete from clients where id = ${id}`;
  connection.query(sqlDelete, (err, result) => {
    if (err) {
      console.log(err, "\n DELETE -------- error");
    } else {
      res.send({
        message: "Дані успішно видалено!",
      });
    }
  });
});
app.delete("/DelteSecur/:Id", (req, res) => {
  const id = req.params.Id;
  const sqlDelete = `delete from securities where id = ${id}`;
  connection.query(sqlDelete, (err, result) => {
    if (err) {
      console.log(err, "\n DELETE -------- error");
    } else {
      res.send({
        message: "Дані успішно видалено!",
      });
    }
  });
});

app.listen(PORT, () => {
    console.log("App at ---> " + 'http://localhost:3001/')
  })