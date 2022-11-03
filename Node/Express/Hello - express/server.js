const express =  require("express");
const app = express();

console.log(__dirname);

app.get("/", (req,res)=>{
    res.sendFile (__dirname + "/index.html");


});

app.get("/bye", (req,res)=>{
    res.send("<h1>Bye</h1>")
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('server running on port ${port}');
});
