const express = require("express");
const router = express.Router();

const usuarios=[
    {
        id:1,
        nome:"Derick",
        email:"derick@gmail.com",
        senha:"12345"
    },

    {
        id:2,
        nome:"Iudhy",
        email:"iudhy@gmail.com",
        senha:"12345"
    },

    {
        id:3,
        nome:"Willian",
        email:"willian@gmail.com",
        senha:"12345"
    },
    
    {
        id:4,
        nome:"Bispo",
        email:"bispo@gmail.com",
        senha:"12345"
    },

    {
        id:5,
        nome:"Wesley",
        email:"wesley@gmail.com",
        senha:"12345"
    },

    {
        id:6,
        nome:"Raimundo",
        email:"raimundo@gmail.com",
        senha:"12345"
    },

    {
        id:7,
        nome:"Wallysson",
        email:"wallysson@gmail.com",
        senha:"12345"
    }, 

    {
        id:8,
        nome:"Guilherme",
        email:"gilherme@gmail.com",
        senha:"12345"
    }, 
]

router.get("/",(req,res)=>{

    res.send(usuarios);
})

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    let novoarray=[];
    novoarray=usuarios.filter(linha=>{
        if(linha.id==id){
            return linha;
        }
    })
    res.send(novoarray);
})

router.post("/",(req,res)=>{
    const {id,nome,email,senha} = req.body;
    if (nome.length()<=3){
        res.status(200).send(
            {mensagem:'Campo nome menor que 3 caracteres'}   
        ) 
    }else{
    usuarios.push(       
        {
            id:id,
            nome:nome,
            email:email,
            senha: senha
        } 
    
    )
    
    res.status(200).send(
        {mensagem:'Cadastro salvo com sucesso'}   
    )
  }
});
router.post("/",(req,res)=>{
})


module.exports = router;