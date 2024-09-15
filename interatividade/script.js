function carregar() {
    var msg = window.document.getElementById('msg') // Obtém o elemento HTML com o id 'msg' onde a mensagem será exibida.
    var img = window.document.getElementById('imagem') // Obtém o elemento HTML <img> com o id 'imagem' onde a imagem será alterada.
    var data = new Date() // Cria um novo objeto Date para obter a data e hora atuais.
    var hora = data.getHours() // Obtém a hora atual (apenas a parte da hora, de 0 a 23).

    // Exibe a hora atual no elemento 'msg'
    msg.innerHTML = `Agora são ${hora} horas.`

    // Verifica em que período do dia estamos e altera a imagem e a cor de fundo da página
    if (hora >= 0 && hora < 12) { // Se a hora estiver entre 0 e 11 (inclusive)
        img.src = 'imagens/manha.png' // Altera a fonte da imagem para 'manha.png' (manhã)
        document.body.style.background = '#f5e46b' // Altera a cor de fundo da página para um tom claro
        img.style.boxShadow = '3px 3px 10px #f5e46b' // Adiciona uma sombra na imagem correspondente ao tom do fundo
    } 
    else if (hora >= 12 && hora <= 18) { // Se a hora estiver entre 12 e 18 (inclusive)
        img.src = 'imagens/tarde.png' // Altera a fonte da imagem para 'tarde.png' (tarde)
        document.body.style.background = '#b85301' // Altera a cor de fundo da página para um tom laranja
        img.style.boxShadow = '3px 3px 10px #b85301' // Adiciona uma sombra na imagem correspondente ao tom do fundo
    } 
    else { // Se a hora for maior que 18 (noite)
        img.src = 'imagens/noite.png' // Altera a fonte da imagem para 'noite.png' (noite)
        document.body.style.background = '#446480' // Altera a cor de fundo da página para um tom azul escuro
        img.style.boxShadow = '3px 3px 10px #446480' // Adiciona uma sombra na imagem correspondente ao tom do fundo
    }
}
