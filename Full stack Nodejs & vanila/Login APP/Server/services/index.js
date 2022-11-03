const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./Config/db.Config'); 

const auth = require ('./middleware/auth'); 
const errors =  require('./middleware/errors');

const unless = require ('express-unless');
const { error, Console } = require('console');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>{
        console.log('Database connected');
    },
    (error)=>{
        console.log("Database Can't be connected:" + error);
    }
);

auth.authenticateToken.unless = unless;
app.use(
    auth.authenticateToken.unless({
        path:[
            { URL : "/users/login",methods:[ "POST"]},
            { URL : "/users/Register",methods:[ "POST"]},
        ]

    })
);

app.use(express.json());

app.use("/users",require("./routes/users.routes"));

app.use(error.errorHandler);

app.listen(process.env.port || 4000, function(){
    Console.log("Ready to Go !");
});




