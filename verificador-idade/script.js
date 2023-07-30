//Reservando variaveis que vou precisar no decorrer do código
var data_n = document.getElementById("ano_nascimento")
var informando = document.getElementById("info-idade")
var t_ultimo = document.getElementById("last")
var corpo = document.getElementsByTagName("body")[0]

var ativar_verificar = document.getElementById("verificar")

//Ativando a função quando a tag button for clicada
ativar_verificar.addEventListener("click", function(e){
    t_ultimo.style.display = 'none'
    var imagem = document.getElementsByTagName("img")[0]
    var sexo = document.querySelectorAll("input.sex")

//Se a data de nascimento do meno igual a zero o sistema vai solicitar o preenchimento correto
    if (data_n.value >= 2023){
        informando.innerHTML = 'Preencha o campo idade corretamente'
    }

//Se for mulher e tiver a idade x as imagens/textos nas codições irão ser executados
    else if(sexo[0].checked){
        var idade = 2023 - data_n.value
        corpo.style.backgroundColor = 'rgb(91, 61, 75)'
        imagem.style.display = 'block'
        if(idade <= 13){
            informando.innerHTML = `Você é uma menina que possui ${idade} anos`
            imagem.src = 'imagens/femi-01.jpg'
        }
        else if(idade > 13 && idade <= 18){
            informando.innerHTML = `Você é uma adolescente que possui ${idade} anos`
            imagem.src = 'imagens/femi-02.jpg'
        }
        else if(idade > 18 && idade < 50){
            informando.innerHTML = `Você é uma mulher que possui ${idade} anos`
            imagem.src = 'imagens/femi-03.jpg'
        }
        else{
            informando.innerHTML = `Você é uma idosa que possui ${idade} anos`
            imagem.src = 'imagens/femi-04.jpg'
        }
    }

//Se for homem e tiver a idade x as imagens/textos nas codições irão ser executados
    else if (sexo[1].checked){
        var idade = 2023 - data_n.value
        corpo.style.backgroundColor = 'rgb(61, 63, 91)'
        imagem.style.display = 'block'
        if(idade <= 13){
            informando.innerHTML = `Você é um menino que possui ${idade} anos`
            imagem.src = 'imagens/masc-01.jpg'
        }
        else if(idade > 13 && idade <= 18){
            informando.innerHTML = `Você é um adolescente que possui ${idade} anos`
            imagem.src = 'imagens/masc-02.jpg'
        }
        else if(idade > 18 && idade < 50){
            informando.innerHTML = `Você é um homem que possui ${idade} anos`
            imagem.src = 'imagens/masc-03.jpg'
        }
        else{
            informando.innerHTML = `Você é um idoso que possui ${idade} anos`
            imagem.src = 'imagens/masc-04.jpg'
        }
    }

//Caso não informe o sexo o sistema solicitará que o usuário informe
    else{
        informando.innerHTML = 'Preencha o campo Sexo'
    }
})
