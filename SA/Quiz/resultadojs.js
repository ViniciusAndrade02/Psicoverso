let valorresultado=document.getElementById('substituir')
let pegarresultado= JSON.parse(localStorage.getItem("armazenarresultado")) //resultado do quiz

let agradecer=document.getElementById('Agradecimento')
let classe=document.getElementById('Classificação')
let opnião=document.getElementById('Conselhos')
let site=document.getElementById('link')

valorresultado.innerHTML=pegarresultado //aparecer o resultado!!!

if(pegarresultado<=25){

        agradecer.innerHTML='Gostariamos de salientar que o Quiz não foi feito por nenhum psicólogos e sim por estudantes!!!'

        classe.innerHTML='Sua Classificação se enquadra em "Nenhum Vício"'

        opnião.innerHTML='Obrigado por jogar o Quiz!!!'

}

if(pegarresultado>25 && pegarresultado<50){

    agradecer.innerHTML='Gostariamos de salientar que o Quiz não foi feito por nenhum psicólogos e sim por estudantes!!!'

    classe.innerHTML='Sua Classificação se enquadra em "Pouco Viciado"'

    opnião.innerHTML='Obrigado por jogar o Quiz!!!'
}

if(pegarresultado>=50 && pegarresultado <75){

    agradecer.innerHTML='Gostariamos de salientar que o Quiz não foi feito por nenhum psicólogos e sim por estudantes!!!'

    classe.innerHTML='Sua Classificação se enquadra em "Muito Viciado".'

    opnião.innerHTML='Obrigado por jogar o Quiz!!!'
}

if(pegarresultado>=75 && pegarresultado <=100){

    agradecer.innerHTML='Gostariamos de salientar que o Quiz não foi feito por nenhum psicólogos e sim por estudantes!!!'

    classe.innerHTML='Sua Classificação se enquadra em "Extremamente Viciado".'

    opnião.innerHTML='Aconselhamos que procure ajuda de um psicológo urgentemente:'

    site.innerHTML= `<a href="https://zenklub.com.br/busca/?c=reason:anxiety,reason:depression">Procure Ajuda!!!</a>`
}


    function voltarprincipal(){

        window.location.href="../index.html"
    }

    function rank(){

        window.location.href='../Rank/rank.html'
    }