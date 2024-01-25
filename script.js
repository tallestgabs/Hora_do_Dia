function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${horas} horas e ${minutos} minutos.`

    if (horas >= 5 && horas <= 11) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#939fbd'
    } else if (horas >=12 && horas <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#c38e70'
    } else if (horas >= 19 && horas <= 23) {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#5d6b66'
    } else {
        //DURMA IMEDIATAMENTE!
        img.src = 'madrugada.png'
        document.body.style.background = '#130e2d'
    }
}

