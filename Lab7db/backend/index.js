const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyparser.json());

// * Підключення БД *
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'lab_6'
});

// ! * Перевірка підключення *
db.connect(err => {
    if (err) { console.log(err, 'Connection --------- error!'); }
    console.log('Connection --------- success!');
});

// * Вибірка даних (get) *
// ? Всі клієнти 
app.get('/client', (req, res) => {
    
    let qr = 'select * from clients';
    db.query(qr, (err, result) => {
        if(err){console.log(err, 'Get ------- error');}

        if(result.length > 0){
            res.send({
                message: 'Вся інформація про клієнтів',
                data: result
            });
        }
    });

});

// ? Всі цінні папери
app.get('/secur', (req, res) => {
    
    let qr = 'select * from `securities`';
    db.query(qr, (err, result) => {
        if(err){console.log(err, 'Get ------- error');}

        if(result.length > 0){
            res.send({
                message: 'Вся інформація про цінні папери',
                data: result
            });
        }
    });

});

// ? Всі інвестиції
app.get('/investments', (req, res) => {
    
    let qr = 'select * from `investments`';
    db.query(qr, (err, result) => {
        if(err){console.log(err, 'Get ------- error');}

        if(result.length > 0){
            res.send({
                message: 'Вся інформація про інвестиції',
                data: result
            });
        }
    });

});


// ? Клієнт по id 
app.get('/client/:id', (req, res) => {

    let cID = req.params.id;
    let qr = `select * from clients where cID= ${cID}`;

    db.query(qr, (err, result) => {
        if(err){console.log(err);}

        if(result.length > 0){
            res.send({
                message: 'Інформація про клієнта',
                data: result
            });
        }
        else{
            res.send({
                message: 'Клієнта з таким id не знайдено! Перевірте правильність введених даних.'
            });
        }
    });
})

// ? Цінний папір по id 
app.get('/secur/:id', (req, res) => {

    let cID = req.params.id;
    let qr = `select * from securities where SecuritiesID= ${cID}`;

    db.query(qr, (err, result) => {
        if(err){console.log(err);}

        if(result.length > 0){
            res.send({
                message: 'Інформація про цінний папір',
                data: result
            });
        }
        else{
            res.send({
                message: `Цінний папір з id ${req.params.id} не знайдено! Перевірте правильність введених даних.`
            });
        }
    });
})

// ? Інвестиція по id 
app.get('/investments/:id', (req, res) => {

    let cID = req.params.id;
    let qr = `select * from investments where iID= ${cID}`;

    db.query(qr, (err, result) => {
        if(err){console.log(err);}

        if(result.length > 0){
            res.send({
                message: 'Інформація про інвестицію',
                data: result
            });
        }
        else{
            res.send({
                message: `Інвестицію з id ${req.params.id} не знайдено! Перевірте правильність введених даних.`
            });
        }
    });
})

// * Додавання даних (post) *
// ? Створення нового клієнта
app.post('/client', (req, res) => {
    console.log(req.body, 'createdata');

    let cName = req.body.cName;
    let cType = req.body.cType;
    let cAddress = req.body.cAddress;
    let AdditionalInfo = req.body.AdditionalInfo;

    let qr = `INSERT INTO clients(cName, cType, cAddress, AdditionalInfo) 
                values('${cName}', '${cType}', '${cAddress}', '${AdditionalInfo}')`;

    db.query(qr, (err, result) =>{
        if(err){console.log(err);}
        res.send({
              message:'Інформація додана'
        });
    })
})

// ? Створення нового цінного паперу
app.post('/secur', (req, res) => {
    console.log(req.body, 'createsecur');

    let MinimumAmount = req.body.MinimumAmount;
    let Rating = req.body.Rating;
    let Profitability = req.body.Profitability;
    let AdditionalInfo = req.body.AdditionalInfo;

    let qr = `INSERT INTO securities(MinimumAmount, Rating, Profitability, AdditionalInfo) 
                values('${MinimumAmount}', '${Rating}', '${Profitability}', '${AdditionalInfo}')`;

    db.query(qr, (err, result) =>{
        if(err){console.log(err);}
        res.send({
              message:'Інформацію про цінний папір додано'
        });
    })
})

// ? Створення нової інвестиції
app.post('/investments', (req, res) => {
    console.log(req.body, 'createinvest');

    let cID = req.body.cID;
    let SecuritiesID = req.body.SecuritiesID;
    let quotation = req.body.quotation;
    let purchaseDate = req.body.purchaseDate;
    let saleDate = req.body.saleDate;

    let qr = `INSERT INTO investments(cID, SecuritiesID, quotation, purchaseDate, saleDate) 
                values('${cID}', '${SecuritiesID}', '${quotation}', '${purchaseDate}', '${saleDate}')`;

    db.query(qr, (err, result) =>{
        if(err){console.log(err);}
        res.send({
              message:'Інформацію про інвестицію додано'
        });
    })
})

// * Оновлення/редагування даних (put) *
app.put('/client/:id', (req, res) =>{
    
    let cID = req.params.id;
    let cName = req.body.cName;
    let cType = req.body.cType;
    let cAddress = req.body.cAddress;
    let cPhone = req.body.cPhone;

    let qr = `UPDATE clients SET cName = '${cName}', cType = '${cType}', cAddress = '${cAddress}', cPhone = '${cPhone}'
                WHERE cID = '${cID}'`;

    db.query(qr, (err, result) => {
        if(err){
            console.log(err, 'POST ------- error');
        }else{
            res.send({
                message: 'Дані успішно оновлено',
                results:result
            });
        }
    });
});

app.put('/secur/:id', (req, res) =>{
    
    let SecuritiesID = req.params.id;
    let MinimumAmount = req.body.MinimumAmount;
    let Rating = req.body.Rating;
    let Profitability = req.body.Profitability;
    let AdditionalInfo = req.body.AdditionalInfo;

    let qr = `UPDATE securities SET MinimumAmount = '${MinimumAmount}', Rating = '${Rating}', Profitability = '${Profitability}', AdditionalInfo = '${AdditionalInfo}'
                WHERE SecuritiesID = '${SecuritiesID}'`;

    db.query(qr, (err, result) => {
        if(err){
            console.log(err, 'POST ------- error');
        }else{
            res.send({
                message: 'Дані успішно оновлено',
                results:result
            });
        }
    });
});

app.put('/investments/:id', (req, res) =>{
    
    let iID = req.params.id;
    let cID = req.body.cID;
    let SecuritiesID = req.body.SecuritiesID;
    let quotation = req.body.quotation;
    let purchaseDate = req.body.purchaseDate;
    let saleDate = req.body.saleDate;

    let qr = `UPDATE investments SET cID = '${cID}', SecuritiesID = '${SecuritiesID}', quotation = '${quotation}', purchaseDate = '${purchaseDate}', saleDate='${saleDate}'
                WHERE iID = '${iID}'`;

    db.query(qr, (err, result) => {
        if(err){
            console.log(err, 'POST ------- error');
        }else{
            res.send({
                message: 'Дані успішно оновлено',
                results:result
            });
        }
    });
});

// * Видалення даних (delete) *
// ? Видалення клієнта по id
app.delete('/client/:id', (req, res) =>{

    let cID = req.params.id;

    let qr = `DELETE FROM clients WHERE cID = ${cID}`;
    db.query(qr, (err, result) => {
        if(err){
            console.log(err, '\n DELETE -------- error');
        }else{
            res.send({
                message: 'Дані успішно видалено!'
            })
        }
    })
});

app.listen(3000, () => {
    console.log('Server ----------- 3000 is ON');
});