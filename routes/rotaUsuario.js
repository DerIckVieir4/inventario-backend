const express = require("express");
const router = express.Router();


function validaremail() {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function verificarduplicidade(email){
    let dadosnovos = [];
    dadosnovos = usuarios.filter(item=>item.email==email);
    if(dadosnovos.length>0){
        return true
    }
    return false;
}

const usuarios=[
    {
        id:1,
        nome:"Derick",
        email:"derick@gmail.com",
        senha:"12345678retre"
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
    let i = 0;
    let errorMsg = [];
    const {id,nome,email,senha} = req.body;

    // Nome
    if (nome.length<=3){ 
        i++;
        errorMsg.push(
            {mensagem:"Campo nome menor que 3 caracteres"}
        )
    }

    // )E-mail
    if(!validaremail(email)){
        i++;
        errorMsg.push(
            {mensagem:"E-mail inválido"}
        )
    }

    // verificarduplicidade
    if(verificarduplicidade(email)){
        i++;
        errorMsg.push(
            {mensagem:"E-mail já cadastrado"}
        )
    }

    if(i==0){
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
    }else{
        res.status(406),send(
           {mensagem:errorMsg} 
        )
    }

    if (email.length==0){ 
        res.status(204).send(
            {mensagem:'Preencher o campo Email'}   
        ) 
    }

    if (senha.length<=7){ 
        res.status(207).send(
            {mensagem:'Preencher campo Senha'}   
        ) 
    }
    
    
  
});

router.delete("/",(req,res)=>{
    let novoarray=[];
    const {id} = req.body;
    novoarray=usuarios.filter(linha=>{
     if(linha.id!==id){
       return linha;
     }  
    })

    res.status(200).send(
       novoarray
    )
   })
   
   router.patch("/",(req,res)=>{
    let novoarray=[];
     const {nome,email,senha,id} = req.body;
    novoarray=usuarios.filter(linha=>{
       if(linha.id==id){
           return{
                       id:id,
                       nome:nome,
                       email: email,
                       senha: senha
                   }
       }else{
           return linha;
       }
    })
})     
module.exports = router;