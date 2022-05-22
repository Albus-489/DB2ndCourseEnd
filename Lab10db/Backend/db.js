const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
PORT = 3001;

const sqlite3 = require("sqlite3").verbose();
let sql;

//Connection to db
const db = new sqlite3.Database("./lab10.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let a = "asdasda";

// * GET ALL *
app.get("/Clients", (req, res) => {
  const query = "SELECT * FROM clients";
  db.all(query, [], (err, result) => {
    if (err) return console.error(err.message);
    res.send(result);
  });
});
app.get("/Secur", (req, res) => {
  const query = "SELECT * FROM secur";
  db.all(query, [], (err, result) => {
    if (err) return console.error(err.message);
    res.send(result);
  });
});
app.get("/Investments", (req, res) => {
  const query = "SELECT * FROM investments";
  db.all(query, [], (err, result) => {
    if (err) return console.error(err.message);
    res.send(result);
  });
});

// ? Add data ?

app.post("/Clients", (req, res) => {
  let name = req.body.name;
  let type = req.body.type;
  let address = req.body.address;
  let phone = req.body.phone;

  let qr = `INSERT INTO clients(name, type, address, phone) values(?, ?, ?, ?)`;
  db.run(qr, [name, type, address, phone], (err) => {
      if(err) return console.error(err.message);
      res.send({
        message:'Інформація про клієнта додана'
  });
  });
});
app.post("/Secur", (req, res) => {
  let minamount = req.body.minamount;
  let profit = req.body.profit;
  let rating = req.body.rating;
  let info = req.body.info;

  let qr = `INSERT INTO secur(minamount, profit, rating, info) values(?, ?, ?, ?)`;
  db.run(qr, [minamount, profit, rating, info], (err) => {
    if (err) return console.error(err.message);
    res.send({
      message: "Інформація про цінний папір додана",
    });
  });
});
app.post("/Investments", (req, res) => {
  let cid = req.body.cid;
  let sid = req.body.sid;
  let quo = req.body.quo;
  let purdate = req.body.purdate;
  let saledate = req.body.saledate;

  let qr = `INSERT INTO investments(cid, sid, quo, purdate, saledate) values(?, ?, ?, ?, ?)`;
  db.run(qr, [cid, sid, quo, purdate, saledate], (err) => {
    if (err) return console.error(err.message);
    res.send({
      message: "Інформація про інвестиції додана",
    });
  });
});

// ^ UPDATE data ^

app.put("/Clients/:id", (req, res) => {
  
  let ID = req.params.id
  let name = req.body.name;
  let type = req.body.type;
  let address = req.body.address;
  let phone = req.body.phone;

  let qr = `UPDATE clients SET name = ?, type = ?, address = ?, phone = ?
   WHERE id = ?`;

  db.run(qr, [name, type, address, phone, ID], (err) => {
    if (err) return console.error(err.message);
    res.send({
      message: "Інформацію про клієнта оновлено успішно",
    });
  });
});
app.put("/Secur/:id", (req, res) => {
  let ID = req.params.id;

  let minamount = req.body.minamount;
  let profit = req.body.profit;
  let rating = req.body.rating;
  let info = req.body.info;

  let qr = `UPDATE secur SET minamount = ?, profit = ?, rating = ?, info = ?
   WHERE id = ?`;

  db.run(qr, [minamount, profit, rating, info, ID], (err) => {
    if (err) return console.error(err.message);
    res.send({
      message: "Інформацію про цінний папір оновлено успішно",
    });
  });
});
app.put("/Investments/:id", (req, res) => {
  let ID = req.params.id;

  let cid = req.body.cid;
  let sid = req.body.sid;
  let quo = req.body.quo;
  let purdate = req.body.purdate;
  let saledate = req.body.saledate;
  
  let qr = `UPDATE investments SET cid = ?, sid = ?, quo = ?, purdate = ?, saledate = ?
   WHERE id = ?`;

  db.run(qr, [cid, sid, quo, purdate, saledate, ID], (err) => {
    if (err) return console.error(err.message);
    res.send({
      message: "Інформацію про інвестиції оновлено успішно",
    });
  });
});

app.listen(PORT, () => {
  console.log("App at ---> " + "http://localhost:3001/");
});
