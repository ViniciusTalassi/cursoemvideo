function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'image/h-criança.PNG')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'image/h-jovem.PNG')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'image/h-adulto.PNG')
            } else {
                //Idoso
                img.setAttribute('src', 'image/h-idoso.PNG')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'image/m-criança.PNG')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'image/m-jovem.PNG')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'image/m-adulta.PNG')
            } else {
                //Idoso
                img.setAttribute('src', 'image/m-idosa.PNG')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}