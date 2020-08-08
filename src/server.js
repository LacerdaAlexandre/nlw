//SERVIDOR
//CONSTANTES DE CONFIGURAÇÃO
const express = require('express')
const server = express()

const {
    pageLandding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require ('./pages')


const nunjucks = require('nunjucks')

//CONOFIGURAR NUNJUKS (template engine)
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})


//INICIO das Configurações do servidor
server
//Receber dados do req.body
.use(express.urlencoded({extended:true}))
//Configuração de arquivos estátiscos
.use(express.static("public"))
//Configuração de rotas
.get("/",pageLandding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)

.post("/save-classes",saveClasses)

//INICIALIZAÇÃO DO SERVIDOR
.listen(5000)