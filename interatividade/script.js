function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f5e46b'
        imagem.style.boxShadow = '3px 3px 10px #f5e46b'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b85301'
        imagem.style.boxShadow = '3px 3px 10px #b85301'
    }
    else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#446480'
        imagem.style.boxShadow = '3px 3px 10px #446480'
    }
}