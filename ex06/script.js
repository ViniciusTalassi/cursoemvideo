function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'image/imagemmanha.png'
        document.body.style.background = '#a7bd75'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'image/imagemtarde.png'
        document.body.style.background = '#efbe73'
    } else {
        //BOA NOITE!
        img.src = 'image/imagemnoite.png'
        document.body.style.background = '#2c2643'
    }
}