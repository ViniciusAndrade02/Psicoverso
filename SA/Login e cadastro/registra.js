let usuario=document.getElementById("cadastro")
let cod1=document.getElementById('senha1')
let cod2=document.getElementById('senha2')
let inputradio= document.getElementsByName('psicologia')

let verificar=0

let informacao=[]

function teste(){

          let informacaousuario = {

               username: '',
               password: '',
               confirmpassoword:'',
               psicologo:''
      
          }

          informacaousuario.username=usuario.value
          informacaousuario.password=cod1.value
          informacaousuario.confirmpassoword=cod2.value   


          informacao=JSON.parse(localStorage.getItem("armazenarnome"))


          if(usuario.value=="" || cod1.value=="" || cod2.value==""){

               if(usuario.value==""){

                    document.getElementById("cadastro").setAttribute('class','espacobranco')
                    document.getElementById("cadastro").setAttribute('placeholder',"Digite o seu nome")
               }

               if(cod1.value==""){

                    document.getElementById("senha1").setAttribute('class','senharepetida2')
                    document.getElementById("senha1").setAttribute('placeholder','Digite sua senha')
               }

               if(cod2.value==""){

                    document.getElementById("senha2").setAttribute('class','senharepetida2')
                    document.getElementById("senha2").setAttribute('placeholder','Digite sua senha')
               }

          }else{
          

if(informacao==null){

     informacao=[]

     for(i=0;i< informacao.length;i++){

          if(informacao[i].username==informacaousuario.username){

               verificar+=1
          }
     }

          if(verificar==0){

               if(informacaousuario.password==informacaousuario.confirmpassoword){


                    informacao.push(informacaousuario)

                    LimparInputs()
     
                    alert("Cadastro feito")
                    localStorage.setItem("armazenarnome",JSON.stringify(informacao))
                    window.location.href="login.html"

 
               }else{ //senhas nao foram iguais
 
                    document.getElementById('cadastro').setAttribute('class','cadastrolimpo')

                    animacaosenharepetida()
                    LimparSenha()
          }

          }else if(verificar>=1){
               //usuario ja existe

               LimparAnimacaoSenha()
               animacaocadastrojaexistente()
               LimparInputs()
     
              verificar=0

                
     }


}else{

     
     for(i=0;i< informacao.length;i++){

          if(informacao[i].username==informacaousuario.username){

               verificar+=1
          }
     }

     if(verificar==0){

          if(informacaousuario.password==informacaousuario.confirmpassoword){


               informacao.push(informacaousuario)

               LimparInputs()

               alert("Cadastro feito")
               localStorage.setItem("armazenarnome",JSON.stringify(informacao))
               window.location.href="login.html"
 
          }else{ //senhas não foram iguais

               document.getElementById('cadastro').setAttribute('class','cadastrolimpo')

               animacaosenharepetida()
               LimparSenha()
          }
     }else if(verificar>=1){
          //cadastro ja existente

          LimparAnimacaoSenha()
          animacaocadastrojaexistente()
          LimparInputs()

         verificar=0
     }
}
}
}





function LimparInputs(){

     usuario.value=""
     cod1.value=""
     cod2.value=""
}

function LimparSenha(){

     cod1.value=""
     cod2.value=""
}

function LimparAnimacaoSenha(){

     document.getElementById("senha1").setAttribute('class','senhalimpo1')
     document.getElementById("senha2").setAttribute('class','senhalimpo2')
}

function animacaocadastrojaexistente(){

     document.getElementById('cadastro').setAttribute('class','cadastrojaexistente')
     document.getElementById('cadastro').setAttribute('placeholder','Já existente')
}

function animacaosenharepetida(){

     document.getElementById("senha1").setAttribute('class','senharepetida1')
     document.getElementById("senha2").setAttribute('class','senharepetida2')

     document.getElementById("senha1").setAttribute('placeholder','Senha Repetida')
     document.getElementById("senha2").setAttribute('placeholder','Senha Repetida')
}