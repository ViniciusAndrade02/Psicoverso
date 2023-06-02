//Parte Funcional para LOGIN E CADASTRO

let pegarnomeusuario=JSON.parse(localStorage.getItem("nomeusuario")) //pegar o nome que o usuario cadastrou

let usuario=document.getElementById('mostrarnome')// o label
let acessarquiz=document.getElementById('tirarsublinhado') //pegar a variavel responsavel por quiz


        if(pegarnomeusuario==null){

            usuario.innerHTML='LOGIN' //Usuario fazer Login
            

                function Perfil(){

                    window.location.href="Login e cadastro/login.html"

                }

                function Quiz(){

                    alert('FAÇA LOGIN PARA USAR O QUIZ')

                }
    
        }else{

            
            usuario.innerHTML=pegarnomeusuario //substituir "LOGIN" pelo nome do usuario

                function Perfil(){

                    window.location.href="Perfil/areadeperfil.html"

                }

                function Quiz(){

                    window.location.href="Quiz/principal.html"
                }
}

        function Sair(){


            usuariosairdaconta=JSON.parse(localStorage.getItem("nomeusuario"))
            usuariosairdaconta=null

            alert('Obrigado por acessar nosso site :)')

            localStorage.setItem("nomeusuario",JSON.stringify(usuariosairdaconta))
            
                window.location.href='index.html'
        }

        function Rank(){

            window.location.href='Rank/rank.html'
        }

        function Principal(){

            window.location.href='index.html'
        }

        function QuizSolucoes(){

            usuariosairdaconta=JSON.parse(localStorage.getItem("nomeusuario"))
            let mensagemfzrlogin=document.getElementById('facaloginquiz')
        
            if(usuariosairdaconta==null){

                mensagemfzrlogin.innerHTML='FAÇA LOGIN PARA ACESSAR O QUIZ!!!'
            }else{

                window.location.href="Quiz/principal.html"
            }
        }


//PARTE FUNCIONAL NO SITE AO CLICAR EM UNS DOS 5 TOPICOS

let clickporque = document.getElementById('porque')  //quando clica na div "Por que esse tema"
let clickoquee = document.getElementById('oquee') // quando clica na div "O Que e"
let clickproblemas= document.getElementById('Problemas')  // quando clica na div "PRINCIPAIS PROBLEMAS"
let clicksolucoes= document.getElementById('solucoes') //quando clica na div "POSSIVEIS SOLUCOES"
let clickquemsomos= document.getElementById('QuemSomos')




//aparecer a div porque
let aparecerporque = document.getElementById('mostrar-porque')

//aparecer a div o que e
let apareceroquee= document.getElementById('mostrar-oquee')

//aparecer a div solucoes
let aparecersolucoes= document.getElementById('mostrar-possiveis-solucoes')

//aparecer a div principais problemas
let aparecerproblemas= document.getElementById('mostrar-principais-problemas')

//aparecer a div quemsomos

let aparecerquemsomos= document.getElementById('quem-somos-mostrar')


    /*quando clicar na div PORQUE */

    clickporque.addEventListener('click',porque)

    function porque(){

        apareceroquee.style.display='none'
        aparecersolucoes.style.display='none'
        aparecerproblemas.style.display='none'
        aparecerquemsomos.style.display='none'

        aparecerporque.style.display='block'
        aparecerporque.style.display='flex'

        document.getElementById('definitivo-porque').scrollIntoView({behavior:'smooth'})

        }

    /*quando clicar na div OQUEE */

    clickoquee.addEventListener('click',oquee)

    function oquee(){

        aparecerporque.style.display='none'
        aparecersolucoes.style.display='none'
        aparecerproblemas.style.display='none'
        aparecerquemsomos.style.display='none'

        apareceroquee.style.display='block'
        apareceroquee.style.display='flex'

        document.getElementById('definitivo-oquee').scrollIntoView({behavior:'smooth'})
    }

    /*quando clicar na div PROBLEMAS */
        
         clickproblemas.addEventListener('click',problemas)
        
    function problemas(){

        aparecerporque.style.display='none'
        aparecersolucoes.style.display='none'
        apareceroquee.style.display='none'
        aparecerquemsomos.style.display='none'

        aparecerproblemas.style.display='block'
        aparecerproblemas.style.display='flex'

        document.getElementById('mostrar-principais-problemas').scrollIntoView({behavior:'smooth'})

    }

    /*quando clicar na div POSSIVEIS SOLUCOES */

        clicksolucoes.addEventListener('click',solucoes)

    function solucoes(){

        aparecerporque.style.display='none'
        aparecerproblemas.style.display='none'
        apareceroquee.style.display='none'
        aparecerquemsomos.style.display='none'

        aparecersolucoes.style.display='block'
        aparecersolucoes.style.display='flex'

        document.getElementById('definitivo-possiveis-solucoes').scrollIntoView({behavior:'smooth'})
    }

    /*quando clicar na div "QUEM SOMOS"  */

        clickquemsomos.addEventListener('click',quemsomos)

        function quemsomos(){

            aparecerporque.style.display='none'
            aparecerproblemas.style.display='none'
            apareceroquee.style.display='none'
            aparecersolucoes.style.display='none'

            aparecerquemsomos.style.display='block'


            document.getElementById('quem-somos-mostrar').scrollIntoView({behavior:'smooth'})
        }


    function aparecersaude(){
  

        document.getElementById('sentido-escolar-definitivo').style.display='none'
        document.getElementById('sentido-trabalho-definitivo').style.display='none'

        document.getElementById('sentido-saude-definitivo').style.display='block'  
    }

    function aparecertrabalho(){

        document.getElementById('sentido-escolar-definitivo').style.display='none'
        document.getElementById('sentido-saude-definitivo').style.display='none'

        document.getElementById('sentido-trabalho-definitivo').style.display='block'
    }

    function aparecerescolar(){

        document.getElementById('sentido-saude-definitivo').style.display='none'
        document.getElementById('sentido-trabalho-definitivo').style.display='none'

        document.getElementById('sentido-escolar-definitivo').style.display='block'
    }


