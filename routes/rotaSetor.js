const express = require("express");
const router = express.Router();

// function validaremail() {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// function verificarduplicidade(email){
//     let dadosnovos = [];
//     dadosnovos = empresa.filter(item=>item.email==email);
//     if(dadosnovos.length>0){
//         return true
//     }
//     return false;
// }

const setores=[
    {
        id:1,
        nome:"Baratão",
    },

    {
        id:2,
        nome:"Sadia",
    },

    {
        id:3,
        nome:"Pollishop",
    }
]



router.get("/setores",(req,res)=>{

    res.send(setores);
})

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    let novoarray=[];
    novoarray=setores.filter(linha=>{
        if(linha.id==id){
            return linha;
        }
    })
    res.send(novoarray);
})

router.post("/setores",(req,res)=>{
    let i = 0;
    let errorMsg = [];
    const {id,nome} = req.body;

    // Nome
    if (nome.length<=3){ 
        i++;
        errorMsg.push(
            {mensagem:"Campo nome menor que 3 caracteres"}
        )
    }

    if(i==0){
    setores.push(       
        {
            id:id,
            nome:nome
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
});

router.delete("/setores",(req,res)=>{
    let novoarray=[];
    const {id} = req.body;
    novoarray=setores.filter(linha=>{
     if(linha.id!==id){
       return linha;
     }  
    })

    res.status(200).send(
       novoarray
    )
   })
   
   router.patch("/setores",(req,res)=>{
    let novoarray=[];
     const {id,nome} = req.body;
    novoarray=setores.filter(linha=>{
       if(linha.id==id){
           return{
                       id:id,
                       nome:nome
                   }
       }else{
           return linha;
       }
    })
}) 

module.exports = router;