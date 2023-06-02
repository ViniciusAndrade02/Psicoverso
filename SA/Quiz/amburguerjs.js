let divUM=document.getElementById('Meio')
let divDois=document.getElementById('OutroMeio')
let divtres=document.getElementById('OutroOutroMeio')

let menuamburguer=document.getElementById("Menu-Bg")

let clickprincipal=document.getElementById('EscritaPrincipal')
let clickquiz=document.getElementById('EscritaQuiz')
let clickpsicologo=document.getElementById('EscritaPsicologo')
let clicksair=document.getElementById('EscritaSair')

valor=1
alterar=1

function onClickMenu(){

    switch(alterar){

        case 0:   //desaparecer a div

            naoaparecerdiv()
            alterar=1  
            
        //Palavras

        clickprincipal.style.display='none'
        clickquiz.style.display='none'
        clickpsicologo.style.display='none'
        clicksair.style.display='none'


            break;



        case 1:  //aparecer a div

            aparecerdiv()
            alterar=0

        //PALAVRAS
        clickprincipal.style.display='block'
        clickquiz.style.display='block'  
        clickpsicologo.style.display='block'  
        clicksair.style.display='block'

            break;
    }


    document.getElementById("menu").classList.toggle("change");


}









function aparecerdiv(){

    menuamburguer.setAttribute('class','aparecer')
    clickprincipal.setAttribute('class','animarprincipal')
    clickquiz.setAttribute('class','animarquiz')
    clickpsicologo.setAttribute('class','animarpsicologo')




}

function naoaparecerdiv(){

    menuamburguer.setAttribute('class','esconderdiv')
}





