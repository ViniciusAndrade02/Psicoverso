/* Funcionamento da parte funcional do quiz*/ 
let soma=0


function operacao(){

    soma=0

    let fist        =  document.getElementsByName('fist')
    let two         =  document.getElementsByName('two')
    let three       =  document.getElementsByName('three')
    let four        =  document.getElementsByName('four')
    let five        =  document.getElementsByName('five')
    let six         =  document.getElementsByName('six')
    let seven       =  document.getElementsByName('seven')
    let eight       =  document.getElementsByName('eight')
    let nine        =  document.getElementsByName('nine')
    let ten         =  document.getElementsByName('ten')
    let eleven      =  document.getElementsByName('eleven')
    let twelve      =  document.getElementsByName('twelve')
    let thirteen    =  document.getElementsByName('thirteen')
    let fourteen    =  document.getElementsByName('fourteen')
    let fiveteen    =  document.getElementsByName('fiveteen')
    let sixteen     =  document.getElementsByName('sixteen')
    let seveteen    =  document.getElementsByName('seveteen')
    let eighteen    =  document.getElementsByName('eighteen')
    let nineteen    =  document.getElementsByName('nineteen')
    let twelty      =  document.getElementsByName('twelty')


    //Primeiro

    if(fist[0].checked){
        soma+= 5
    } 
    if(fist[1].checked){
        soma+= 3
    }
    if(fist[2].checked){
        soma+= 1
    }
    if(fist[3].checked){
        soma+= 0
    }

    //segundo

    if(two[0].checked){
        soma += 5
    } 
    if(two[1].checked){
        soma += 4
    }
    if(two[2].checked){
        soma+= 2
    }
    if(two[3].checked){
        soma+= 1
    }

    //terceiro

    if(three[0].checked){
        soma+=5
    }
    if(three[1].checked){
        soma+=3
    }
    if(three[2].checked){
        soma+=1
    }
    if(three[3].checked){
        soma+=0
    }

    //quarto

    if(four[0].checked){
        soma+=5
    }
    if(four[1].checked){
        soma+=4
    }
    if(four[2].checked){
        soma+=3
    }
    if(four[3].checked){
        soma+=0
    }

    //cinco

    if(five[0].checked){
        soma+=5
    }
    if(five[1].checked){
        soma+=4
    }
    if(five[2].checked){
        soma+=2
    }
    if(five[3].checked){
        soma+=0
    }

    //seis

    if(six[0].checked){
        soma+=5
    }
    if(six[1].checked){
        soma+=3
    }
    if(six[2].checked){
        soma+=1
    }
    if(six[3].checked){
        soma+=0
    }

    //seven

    if(seven[0].checked){
        soma+=5
    }
    if(seven[1].checked){
        soma+=3
    }
    if(seven[2].checked){
        soma+=1
    }
    if(seven[3].checked){
        soma+=0
    }

    //oito

    if(eight[0].checked){
        soma+=5
    }
    if(eight[1].checked){
        soma+=3
    }
    if(eight[2].checked){
        soma+=2
    }
    if(eight[3].checked){
        soma+=1
    }

    //nove

    if(nine[0].checked){
        soma+=5
    }
    if(nine[1].checked){
        soma+=4
    }
    if(nine[2].checked){
        soma+=3
    }
    if(nine[3].checked){
        soma+=1
    }

    //dez

    if(ten[0].checked){
        soma+=5
    }
    if(ten[1].checked){
        soma+=4
    }
    if(ten[2].checked){
        soma+=2
    }
    if(ten[3].checked){
        soma+=0
    }

    //once

    if(eleven[0].checked){
        soma+=5
    }
    if(eleven[1].checked){
        soma+=3
    }
    if(eleven[2].checked){
        soma+=2
    }
    if(eleven[3].checked){
        soma+=1
    }

    //doze

    if(twelve[0].checked){
        soma+=5
    }
    if(twelve[1].checked){
        soma+=4
    }
    if(twelve[2].checked){
        soma+=2
    }
    if(twelve[3].checked){
        soma+=0
    }

    //treze

    if(thirteen[0].checked){
        soma+=5
    }
    if(thirteen[1].checked){
        soma+=3
    }
    if(thirteen[2].checked){
        soma+=1
    }
    if(thirteen[3].checked){
        soma+=0
    }

    //catorze

    if(fourteen[0].checked){
        soma+=5
    }
    if(fourteen[1].checked){
        soma+=4
    }
    if(fourteen[2].checked){
        soma+=2
    }
    if(fourteen[3].checked){
        soma+=1
    }

    //quinze

    if(fiveteen[0].checked){
        soma+=5
    }
    if(fiveteen[1].checked){
        soma+=3
    }
    if(fiveteen[2].checked){
        soma+=2
    }
    if(fiveteen[3].checked){
        soma+=1
    }

    //dezesseis

    if(sixteen[0].checked){
        soma+=5
    }
    if(sixteen[1].checked){
        soma+=4
    }
    if(sixteen[2].checked){
        soma+=3
    }
    if(sixteen[3].checked){
        soma+=1
    }

    //dezesete

    if(seveteen[0].checked){
        soma+=5
    }
    if(seveteen[1].checked){
        soma+=3
    }
    if(seveteen[2].checked){
        soma+=2
    }
    if(seveteen[3].checked){
        soma+=0
    }

    //dezoito

    
    if(eighteen[0].checked){
        soma+=5
    }
    if(eighteen[1].checked){
        soma+=4
    }
    if(eighteen[2].checked){
        soma+=3
    }
    if(eighteen[3].checked){
        soma+=1
    }

    //dezenove
  
    if(nineteen[0].checked){
        soma+=5
    }
    if(nineteen[1].checked){
        soma+=5
    }
    if(nineteen[2].checked){
        soma+=2
    }
    if(nineteen[3].checked){
        soma+=1
    }

    //vinte

    if(twelty[0].checked){
        soma+=5
    }
    if(twelty[1].checked){
        soma+=5
    }
    if(twelty[2].checked){
        soma+=2
    }
    if(twelty[3].checked){
        soma+=1
    }

 
    localStorage.setItem("armazenarresultado",JSON.stringify(soma)) //resultado outra pagina

    todoscadastros=JSON.parse(localStorage.getItem("armazenarnome")) //todos os cadastros
    usuario=JSON.parse(localStorage.getItem("nomeusuario")) //o usuario logado

    for(i=0;i<todoscadastros.length;i++){

        if(todoscadastros[i].username==usuario){

            todoscadastros[i].pontuacao=soma
            todoscadastros[i].quiz=1
        }
    }

    localStorage.setItem("nomeusuario",JSON.stringify(usuario))
    localStorage.setItem("armazenarnome",JSON.stringify(todoscadastros))


    window.location.href='resultado.html'
    

}




//PARTE FUNIONAL DO PERFIL



let pegaroiddousuario=JSON.parse(localStorage.getItem("nomeusuario")) //pegar o nome que o usuario cadastrou
let usuario=document.getElementById('mostrarnome')// o label

    usuario.innerHTML=pegaroiddousuario  //aparecer o nome da pessoa q fez login

    function Perfil(){

        window.location.href="../Perfil/areadeperfil.html"
    }

    function Quiz(){

        window.location.href="../Quiz/principal.html"
    }

    function Rank(){

        window.location.href='../Rank/rank.html'
    }

    function Principal(){

        window.location.href='../index.html'
    }


    function Sair(){


        usuariosairdaconta=JSON.parse(localStorage.getItem("nomeusuario"))
        usuariosairdaconta=null

        alert('Obrigado por acessar nosso site :)')

        localStorage.setItem("nomeusuario",JSON.stringify(usuariosairdaconta))
        
            window.location.href='../index.html'
    }

