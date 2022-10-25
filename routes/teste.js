const express = require("express");
const app = express();
const alunos=[
    {nome:"Derick",endereco:"rua jacare",idade:23},
    {nome:"Amanada",endereco:"rua crocodilo",idade:45},
    {nome:"Fernanda",endereco:"rua catrakera",idade:12},
]
const cadastro = {
    nome:"Derick",
    endereco:"rua catrakera",
    idade:34,
    cursos:["informatica para internet","farmaceutico"],
    conjuge:[
        {nome:"MAILSON terror do bispo", idade:20, sexo:"M"}
    ]
}
const usuarios=[
    {nome:"arthur",idade:20},
    {nome:"pedro",idade:90},
    {nome:"amanda",idade:10},
    {nome:"alvaro",idade:30},
    {nome:"ivã",idade:15},
    {nome:"arthur m",idade:60}
]



app.get("/",(req,res)=>{
    res.send({alunos:"Hello Word"})
})
app.get("/usuarios",(req,res)=>{
    res.send(usuarios)
})
app.get("/calcular",(req,res)=>{
    let novoarray = [];
    usuarios.map(linha=>{
        
        novoarray.push(
        {
            nome:linha.nome,idade:linha.idade+10
        }
        )
        
    })
    res.send(novoarray);
})

app.get("/IMPRIMIR/:posicao",(req,res)=>{
    const primeiro = req.query
    const segundo = req.query

    res.send([
        usuarios[primeiro],
        usuarios[segundo]
    ]
    );

})



module.exports = app;

//ofsogfsdg