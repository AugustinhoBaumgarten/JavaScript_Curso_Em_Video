function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    // Transição suave (opcional)
    document.body.style.transition = "background 1s ease"

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'fotoManha.jpg'
        document.body.style.background = "#B4B6AA"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'fotoTarde.jpg'
        document.body.style.background = "#FEC117"
    } else {
        // Boa noite
        img.src = 'fotoNoite.jpg'
        document.body.style.background = "#0D0445"
    }
}
 