const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

async function start (){
    try {

        await mongoose.connect('mongodb+srv://ivan:123qwe@cluster0.upjsx.mongodb.net/Lab8db', {
            useNewUrlParser: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on --> http://localhost:3000 <--`);
        })

    } catch (e) {
        console.log(e);
    }
}

module.exports = () => start();