//---- TEMPORÁRIO PARA TESTES
//DADOS
const proffys = [
    {
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: 11999999999, 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cost:"20.00", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    {
        name:"Ana", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: 11999999999, 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cost:"20.00", 
        weekday:[2], 
        time_from:[720], 
        time_to:[1220]
    }

]

const subjects = [
"Artes",
"Biologia",
"Ciências",
"Educação física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
"Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
//-------------------
//FUNCIONALIDADES

function getSubject(subjectNumber){

    const position = +subjectNumber-1

    return subjects[position]
}

function pageLandding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html",{ proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
    const data = req.query

    //Se tiver dados, adicionar
    const isNoEmpty = Object.keys(data).length > 0
    if(isNoEmpty){

        data.subject = getSubject(data.subject)

        //Adiciona dados a lista de proffys
        proffys.push(data)

        //Redireciona para a página study
        return res.redirect("/study")
    }

    //Se não, não adicionar


    return res.render("give-classes.html", {subjects, weekdays })
}

//SERVIDOR
//CONSTANTES DE CONFIGURAÇÃO
const express = require('express')
const server = express()
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