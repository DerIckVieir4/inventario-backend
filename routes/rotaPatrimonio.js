const express = require("express");
const router = express.Router();


const patrimonio=[
    {
        id:1,
        nome:"Derick",
        datadeaquisicao:"21/02/2009"
    },
    { 
        id:2,
        nome:"Iudhy",
        datadeaquisicao:"21/02/2009"
    },
    {
        id:3,
        nome:"Willian",
        datadeaquisicao:"21/02/2009"
    }
]
router.get("/",(req,res)=>{

   res.send(patrimonio);
})
router.get("/:id",(req,res)=>{
   const id=req.params.id;
   let novoarray=[];
   novoarray=patrimonio.filter(linha=>{
    if(linha.id==id){
        return linha;
    }
   })
   res.send(novoarray);
})
router.post("/",(req,res)=>{
    const {id,nome,datadeaquisicao}=req.body;
    let i=0;
    let errorMsg=[];
    if (nome.length<=3){
      i++;
       errorMsg.push(
        {mensagem:"'Campo nome menor que 3 caracteres'"}
       )
    }
   
       
       if(i==0){
            patrimonio.push(
                {
                    id:id,
                    nome:nome,
                    datadeaquisicao:datadeaquisicao
                }
            )
            res.status(201).send(
                {mensagem:'Cadastro Salvo com Sucesso'}
                )
            }else{
                res.status(406).send(
                    {mensagem:errorMsg}
                    )  
            }
});
router.delete("/patrimonio",(req,res)=>{
 let novoarray=[];
 const {id} = req.body;
 novoarray=patrimonio.filter(linha=>{
  if(linha.id!==id){
    return linha;
  }
    
 })
 res.status(200).send(
    novoarray
 )
})

router.patch("/patrimonio",(req,res)=>{
 let novoarray=[];
  const {nome,datadeaquisicao,id} = req.body;
 novoarray=us
 patrimonio.filter(linha=>{
    if(linha.id==id){
        return{
                    id:id,
                    nome:nome,
                    datadeaquisicao:datadeaquisicao
                }
    }else{
        return linha;
    }
 })
})

module.exports = router;