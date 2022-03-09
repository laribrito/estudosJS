function carregar(){
    var msg = document.getElementById('lugarMsg')
    var img = document.getElementById('imagem')
    var saudacao = document.getElementById('lugarSaudacao')
    var dataAtual = new Date()
    var hora = dataAtual.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora<6){
        // boa madrugada
        img.src="fotoMadrugada.png"
        document.body.style.background="#6e543e"
        saudacao.innerHTML="<p>Boa madrugada!</p>"
    } else if(hora<12){
        // bom dia
        img.scr="fotoManha.png"
        document.body.style.background="#a7a779"
        saudacao.innerHTML="<p>Bom dia!</p>"
    } else if(hora<=18){
        // boa tarde
        img.src="fotoTarde.png"
        document.body.style.background="#fd933f"
        saudacao.innerHTML="<p>Boa tarde!</p>"
    } else {
        // boa noite
        img.src="fotoNoite.png"
        document.body.style.background="#004777"
        saudacao.innerHTML="<p>Boa noite!</p>"
    }
}