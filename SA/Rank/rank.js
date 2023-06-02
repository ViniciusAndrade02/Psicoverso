//nomes dos jogadores

let nome1= document.getElementById('nomejg1')
let nome2= document.getElementById('nomejg2')
let nome3= document.getElementById('nomejg3')
let nome4= document.getElementById('nomejg4')
let nome5= document.getElementById('nomejg5')
let nome6= document.getElementById('nomejg6')
let nome7= document.getElementById('nomejg7')
let nome8= document.getElementById('nomejg8')
let nome9= document.getElementById('nomejg9')
let nome10= document.getElementById('jnomejg10')

//rank dos jogadores

let rank1= document.getElementById('pontjg1')
let rank2= document.getElementById('pontjg2')
let rank3= document.getElementById('pontjg3')
let rank4= document.getElementById('pontjg4')
let rank5= document.getElementById('pontjg5')
let rank6= document.getElementById('pontjg6')
let rank7= document.getElementById('pontjg7')
let rank8= document.getElementById('pontjg8')
let rank9= document.getElementById('pontjg9')
let rank10= document.getElementById('rankjg10 ')

    let  todoscadastros=JSON.parse(localStorage.getItem("armazenarnome"))


        for(i=0;i<todoscadastros.length;i++){

        switch(i){

            case 0:

            nome1.innerHTML=todoscadastros[i].username
            rank1.innerHTML=todoscadastros[i].pontuacao
            break;

            case 1:

            nome2.innerHTML=todoscadastros[i].username
            rank2.innerHTML=todoscadastros[i].pontuacao
            break;

            case 2:

            nome3.innerHTML=todoscadastros[i].username
            rank3.innerHTML=todoscadastros[i].pontuacao
            break;

            case 3:

            nome4.innerHTML=todoscadastros[i].username
            rank4.innerHTML=todoscadastros[i].pontuacao
            break;

            case 4:

            nome5.innerHTML=todoscadastros[i].username
            rank5.innerHTML=todoscadastros[i].pontuacao
            break;

            case 5:

            nome6.innerHTML=todoscadastros[i].username
            rank6.innerHTML=todoscadastros[i].pontuacao
            break;

            case 6:

            nome7.innerHTML=todoscadastros[i].username
            rank7.innerHTML=todoscadastros[i].pontuacao
            break;

            case 7:

            nome8.innerHTML=todoscadastros[i].username
            rank8.innerHTML=todoscadastros[i].pontuacao
            break;

            case 8:

            nome9.innerHTML=todoscadastros[i].username
            rank9.innerHTML=todoscadastros[i].pontuacao
            break;

            case 10:

            nome10.innerHTML=todoscadastros[i].username
            rank10.innerHTML=todoscadastros[i].pontuacao
            break;
    }
}



    function principal(){

        window.location.href="../index.html"

    }

    /*   switch(i){

            case 0:

            nome1.innerHTML=todoscadastros[i].username
            rank1.innerHTML=todoscadastros[i].pontuacao
            break;

            case 1:

            nome2.innerHTML=todoscadastros[i].username
            rank2.innerHTML=todoscadastros[i].pontuacao
            break;

            case 2:

            nome3.innerHTML=todoscadastros[i].username
            rank3.innerHTML=todoscadastros[i].pontuacao
            break;

            case 3:

            nome4.innerHTML=todoscadastros[i].username
            rank4.innerHTML=todoscadastros[i].pontuacao
            break;

            case 4:

            nome5.innerHTML=todoscadastros[i].username
            rank5.innerHTML=todoscadastros[i].pontuacao
            break;

            case 5:

            nome6.innerHTML=todoscadastros[i].username
            rank6.innerHTML=todoscadastros[i].pontuacao
            break;

            case 6:

            nome7.innerHTML=todoscadastros[i].username
            rank7.innerHTML=todoscadastros[i].pontuacao
            break;

            case 7:

            nome8.innerHTML=todoscadastros[i].username
            rank8.innerHTML=todoscadastros[i].pontuacao
            break;

            case 8:

            nome9.innerHTML=todoscadastros[i].username
            rank9.innerHTML=todoscadastros[i].pontuacao
            break;

            case 10:

            nome10.innerHTML=todoscadastros[i].username
            rank10.innerHTML=todoscadastros[i].pontuacao
            break;
    }*/