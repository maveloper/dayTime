function carregar() {
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`image`)
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. `
    if(hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'phmorning.png'
        document.body.style.background = '#b08751'
    }else if(hora >= 12 && hora <18){
        //Boa tarde!
        img.src = 'pafternoon.png'
        document.body.style.background = '#fd8200'
    }else {
        //Boa noite!
        img.src = 'pnight.png'
        document.body.style.background = '#010409'
    }



}


