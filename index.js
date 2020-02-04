const express = require('express'); // Importando express.

const app = express();//Iniciando o express.

app.get('/',(req, res) =>{
    res.send('olá mundo ')
})



app.get('/canal', (req, res) => {
  var canal = req.query['Canal'];
  canal ? res.send(canal) : res.send('Nenhum canal fornecido');
 
})

app.get('/ola/:nome/:empressa', (req, res) => {
  var nome = req.params.nome;
  var empresa = req.params.empresa
  res.send('<h1> OI '+ nome +'do'+ empresa +'</h1>')
})

app.listen(3000,(erro) => {
    if(erro){
        console.log('occorreu um erro');
    }else{
        console.log('Servidor iniciado com sucesso!')
    }
})
 