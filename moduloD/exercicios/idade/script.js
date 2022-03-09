function verificar(){
    var anoNasc = document.getElementById("nasc")
    var anoAtual = new Date()
    anoAtual = anoAtual.getFullYear()
    if(anoNasc.value.length<4 || anoNasc>=anoAtual){
        alert("ERRO: Verifique os dados e tente novamente!")
    } else {
        var idade = anoAtual - Number(anoNasc.value)
        var sexo = document.getElementsByName("sexo")
        var res = document.getElementById("res")
        // COMO CRIAR UM ELEMENTO HTML PELO JS
        var img = document.createElement("img")
        // COMO ADICIONAR ATRIBUTOS NUM ELEMENTO HTML PELO JS
        // (nome-do-atributo, valor-do-atributo)
        img.setAttribute("id", "foto")
        var genero = ""
        if(sexo[0].checked){
            genero = 'um homem'
            if(idade<=3){
                // bebê
                img.setAttribute("src", "fotoBebeM.png")
            } else if(idade<14){
                // criança
                img.setAttribute("src", "fotoCriancaM.png")
            } else if(idade<21){
                // jovem
                img.setAttribute("src", "fotoJovemM.png")
            } else if(idade<60){
                // adulto
                img.setAttribute("src", "fotoAdultoM.png")
            } else {
                // idoso
                img.setAttribute("src", "fotoIdosoM.png")
            }
        } else {
            genero = 'uma mulher'
            if(idade<=3){
                // bebê
                img.setAttribute("src", "fotoBebeF.png")
            } else if(idade<14){
                // criança
                img.setAttribute("src", "fotoCriancaF.png")
            } else if(idade<21){
                // jovem
                img.setAttribute("src", "fotoJovemF.png")
            } else if(idade<60){
                // adulto
                img.setAttribute("src", "fotoAdultoF.png")
            } else {
                // idoso
                img.setAttribute("src", "fotoIdosoF.png")
            }
        }
        res.style.textAlign="center"
        res.innerHTML=`<p>Detectamos ${genero} de ${idade} anos</p>`
        // COMO ADICIONAR UM ELEMENTO CRIADO NO JS NO HTML
        res.appendChild(img)
    }
}