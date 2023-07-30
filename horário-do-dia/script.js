function imagem(){

//Reservando as variárveis que serão utilizadas no projeto
    var corpo = document.getElementsByTagName("body")[0]
    var texto = document.getElementById("informando")
    var foto = document.getElementById("pic")

//Configurando o horário com base na máquina do cliente
    var data = new Date()
    var horas = data.getHours()
    texto.innerHTML = `Agora são ${horas} horas`

//Condições para exibição da imagem e do texto
    if (horas >= 0 && horas<=12){
        texto.innerHTML += ', bom dia'
        foto.src = 'imagens/dia.jpg'
        corpo.style.backgroundColor = '#A57844'
    }
    else if(horas>12 && horas <=18){
        texto.innerHTML += ', boa tarde'
        foto.src = 'imagens/tarde.jpg'
        corpo.style.backgroundColor = '#BD5530'
    }
    else{
        texto.innerHTML += ', boa noite'
        foto.src = 'imagens/noite.jpg'
        corpo.style.backgroundColor = '#2C2E2F'
    }
}