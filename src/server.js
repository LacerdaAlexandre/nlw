//SERVIDOR
//CONSTANTES DE CONFIGURAÇÃO
const express = require('express')
const server = express()

const {
    pageLandding,
    pageStudy,
    pageGiveClasses
} = require ('./pages')


const nunjucks = require('nunjucks')

//CONOFIGURAR NUNJUKS (template engine)
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})


//INICIO das Configurações do servidor
server
//Configuração de arquivos estátiscos
.use(express.static("public"))
//Configuração de rotas
.get("/",pageLandding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)

//INICIALIZAÇÃO DO SERVIDOR
.listen(5000)