const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const sequelize = require('./util/database');

const userRouter = require('./router/user-router');

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use('/',userRouter)

sequelize
    .sync()
    .then((result)=>{
        app.listen(4002)
    })
    .catch((err)=>console.log(err))