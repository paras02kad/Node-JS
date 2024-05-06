
// function test()
// {
//     console.log('call back');
// }


//     const add = function(a,b,test)
//     {
//         var result = a + b;
//         console.log(result);
//         test();
//     }

//     add(2,3,test);

// var fs = require('fs');
// var os = require('os');

//     var user = os.userInfo()
//     console.log(user.username)

//     fs.appendFile('greeting.txt','Hi' + user.username + '!',()=>{
//         console.log("the file is already is created")
//     })

//     console.log(fs);


//const notes = require('./notes.js');
//console.log('server file is created')

//var age = notes.age;

//var result = notes.addnumber(age,3);
//console.log(result);

// var hero = require('lodash');
// var data = ["person",1,2,3,4,"Kadela"];
// var filter = hero.uniq(data)
// console.log(filter);


const objectToConvert = {
    name : "Paras",
    age : 23
};

// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json)

const express = require('express');
const app = express();
const db = require('./db');

// Define routes and middleware here
// ...
app.get('/',function(req,res){
    res.send('Hello World')
})

app.get('/chicken',(req,res)=>{
    var data = {
        type : "Idli",
        content : "Rava",
        extras : "Sambhar",
    }
    res.send(data)
})



app.listen(3000,()=>{
    console.log("server is listening on port 3000")
});



