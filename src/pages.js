const Database = require('./database/db')

const {
    subjects, 
    weekdays,
    getSubject
} = require ('./utils/format')

function pageLandding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query

    if(!filters.subject||!filters.weekday||filters.time){
        return res.render("study.html",{ filters, subjects, weekdays })
    }

    console.log('Não tem campos vazios')

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `

    
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


module.exports = {
    pageLandding,
    pageStudy,
    pageGiveClasses
}