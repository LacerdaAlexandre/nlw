const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db)=>{
    //Inserir dados

    proffyValue = {
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: 11999999999, 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 1, 
        cost: "20.00", 
        //O proffy id virá pelo banco de dados


    }

    classScheduleValues = [
        //O class_id virá pelo banco após cadastro do class
        {
            weekday:1, 
            time_from:720, 
            time_to:1220
        },
        {
            weekday:0, 
            time_from:520, 
            time_to:1220
        }
    ]

    //await createProffy(db, proffyValue, classValue, classScheduleValues)

    //COnsultar dados
    //Consultar todos os DADOS
    const selectedProffys = await db.all("SELECT * FROM proffys")
   // console.log(selectedProffys)

    //COnsultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
    
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id=1;
    
    `)

    //console.log(selectClassesAndProffys)

    //O horário que a pessoa trabalha por exemplo é das 08h - 18h
    //O horário do time_from precisa ser menor ou igual do horário solicitado
    //o time_to precisa ser maior

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedule)



})