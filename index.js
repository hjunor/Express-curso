const express = require('express'); // Importando express.

const app = express();//Iniciando o express.

app.get('/',(req, res) =>{
    res.send('olá mundo ')
})

app.get('/soma/:numA & numB', (req, res) => {
function soma( iA, iB){
    return parseInt(iA) +parseInt( iB);
}
let a = parseInt(req.params.numA)
let b = parseInt(req.params.numB)
let c = soma(a,b)

  res.send(c)
})

app.get('/canal/youtube', (req, res) => {
  res.send('GET request to the homepage')
})

app.get('/ola/:nome', (req, res) => {
  res.send(req.params.nome)
})

app.listen(3000,(erro) => {
    if(erro){
        console.log('occorreu um erro');
    }else{
        console.log('Servidor iniciado com sucesso!')
    }
})
