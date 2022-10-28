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

const empresa=[
    {
        id:1,
        nome:"Derick",
        responsavel:"Pai do Derick",
        contato:"347678623678"
    },

    {
        id:2,
        nome:"Iudhy",
        responsavel:"Pai do Iudhy",
        contato:"u3yu373733"
    },

    {
        id:3,
        nome:"Willian",
        responsavel:"Pai do Willian",
        contato:"74747474747"
    },
    
    {
        id:4,
        nome:"Bispo",
        responsavel:"Pai do bispo",
        contato:"90009090900"
    },

    {
        id:5,
        nome:"Wesley",
        responsavel:"Pai do Wesley",
        contato:"223808302309"
    },

    {
        id:6,
        nome:"Raimundo",
        responsavel:"Pai do Raimundo",
        contato:"74747474747"
    },

    {
        id:7,
        nome:"Wallysson",
        responsavel:"Pai do Wallisson",
        contato:"454544445547"
    }, 

    {
        id:8,
        nome:"Guilherme",
        responsavel:"Pai do Guilherme",
        contato:"8768739484"
    }, 
]



router.get("/empresas",(req,res)=>{

    res.send(empresa);
})

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    let novoarray=[];
    novoarray=empresa.filter(linha=>{
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

    // )E-mail
    if(responsavel.length<=3(responsavel)){
        i++;
        errorMsg.push(
            {mensagem:"Campo inválido"}
        )
    }

    // verificarduplicidade
    if(contato.length<9(contato)){
        i++;
        errorMsg.push(
            {mensagem:"Campo contato inválido"}
        )
    }

    if(i==0){
    empresa.push(       
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
    novoarray=empresa.filter(linha=>{
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
    novoarray=empresa.filter(linha=>{
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