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

const empresas=[
    {
        id:1,
        nome:"Tiradentes",
        responsavel:"Pai do Derick",
        contato:"347678623678"
    },

    {
        id:2,
        nome:"Campelo",
        responsavel:"Pai do Iudhy",
        contato:"u3yu373733"
    },

    {
        id:3,
        nome:"Dent Center",
        responsavel:"Pai do Willian",
        contato:"74747474747"
    }
]



router.get("/empresas",(req,res)=>{

    res.send(empresas);
})

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    let novoarray=[];
    novoarray=empresas.filter(linha=>{
        if(linha.id==id){
            return linha;
        }
    })
    res.send(novoarray);
})

router.post("/empresas",(req,res)=>{
    let i = 0;
    let errorMsg = [];
    const {id,nome,responsavel,contato} = req.body;

    // Nome
    if (nome.length<=3){ 
        i++;
        errorMsg.push(
            {mensagem:"Campo nome menor que 3 caracteres"}
        )
    }

    
    if(responsavel.length==0(responsavel)){
        i++;
        errorMsg.push(
            {mensagem:"Campo inválido"}
        )
    }

    if(contato.length<9(contato)){
        i++;
        errorMsg.push(
            {mensagem:"Campo contato inválido"}
        )
    }

    if(i==0){
    empresas.push(       
        {
            id:id,
            nome:nome,
            contato:contato,
            responsavel:responsavel
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

    if (contato.length==0){ 
        res.status(204).send(
            {mensagem:'Preencher o campo Contato'}   
        ) 
    }

    if (responsavel.length<=7){ 
        res.status(207).send(
            {mensagem:'Preencher campo Responsavel'}   
        ) 
    }
    
    
  
});

router.delete("/empresas",(req,res)=>{
    let novoarray=[];
    const {id} = req.body;
    novoarray=empresas.filter(linha=>{
     if(linha.id!==id){
       return linha;
     }  
    })

    res.status(200).send(
       novoarray
    )
   })
   
   router.patch("/empresas",(req,res)=>{
    let novoarray=[];
     const {id,nome,responsavel,contato} = req.body;
    novoarray=empresas.filter(linha=>{
       if(linha.id==id){
           return{
                       id:id,
                       nome:nome,
                       responsavel,
                       contato
                   }
       }else{
           return linha;
       }
    })
}) 

module.exports = router;