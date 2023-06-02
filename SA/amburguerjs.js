let menuamburguer=document.getElementById("Menu-Bg") //todas as divs

let clickprincipal=document.getElementById('EscritaPrincipal')
let clickquiz=document.getElementById('EscritaQuiz')
let clickpsicologo=document.getElementById('EscritaPsicologo')
let clicksair=document.getElementById('EscritaSair')

valor=1
alterar=1

let divsair=document.getElementById('Usuariosair')  //div sair


function onClickMenu(){

    verificardivsair=JSON.parse(localStorage.getItem("nomeusuario")) //verificar se,div estiver fazia ->desapareca a div para sair

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


        if(verificardivsair==null){  //se não estiver logado não vai aparecer a div para sair

            clicksair.style.display='none'
            divsair.style.display='none'

        }else{ //se tiver logado aparecerá para sair

            clicksair.style.display='block'
            divsair.style.display='block'
            divsair.style.display='flex'
            divsair.style.justifyContent='center'
            divsair.style.alignItems='center'
        }

        

        break;
    }


    document.getElementById("menu").classList.toggle("change");


}


function aparecerdiv(){

    menuamburguer.setAttribute('class','aparecer')

    clickprincipal.setAttribute('class','animarprincipal')
    clickquiz.setAttribute('class','animarquiz')
    clickpsicologo.setAttribute('class','animarpsicologo')
    clicksair.setAttribute('class','animarsair')




}

function naoaparecerdiv(){

    menuamburguer.setAttribute('class','esconderdiv')
}





