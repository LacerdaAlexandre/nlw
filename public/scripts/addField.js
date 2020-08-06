document.querySelector("#add-time") //Procurar o botão
.addEventListener('click',cloneField) //Quando clicar no botão


//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item')
    .cloneNode(true)

    //Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para campo limpa

    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ""

    });

    //Colocar na página onde?
    document.querySelector('#schedule-items')
    .appendChild(newFieldContainer)
}
