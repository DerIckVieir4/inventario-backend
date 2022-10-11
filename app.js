const express = require("express");
const res = require("express/lib/response");
const app = express();
const usuarios=[
    {nome:"arthur",idade:20},
    {nome:"pedro",idade:90},
    {nome:"amanda",idade:10},
    {nome:"alvaro",idade:30},
    {nome:"ivã",idade:15},
    {nome:"arthur m",idade:60}
]

app.get("/",(req,res)=>{
    res.json({menssagem:"Hello Word"})
})
app.get("/usuarios",(req,res)=>{
    res.send(usuarios)
})


module.exports = app;
