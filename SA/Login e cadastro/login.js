let UsernameLogin = document.getElementById("Email")
let PasswordLogin = document.getElementById("Senha");

let pegarnome=JSON.parse(localStorage.getItem("armazenarnome"))


let verificar = 0

function login(){

    verificar=0

    for(i=0;i<pegarnome.length;i++){

        if(UsernameLogin.value==pegarnome[i].username){

            if(PasswordLogin.value==pegarnome[i].password){

                verificar+=1

                alert("login sucesso")
                let nomedousuario=pegarnome[i].username
                localStorage.setItem("nomeusuario",JSON.stringify(nomedousuario))
                window.location.href="../index.html"


            }else{

                verificar+=1
                 //quando usuário erra senha
                PasswordLogin.value=""
                UsernameLogin.value=""
                
                document.getElementById('Email').setAttribute('class','Emailresetado')
                
                document.getElementById('Senha').setAttribute('class','erroSenha')
                document.getElementById('Senha').setAttribute('placeholder','Senha Errado')


            }
        }
    }

    if(verificar==0){

        PasswordLogin.value=""
        UsernameLogin.value=""
    
        document.getElementById('Email').setAttribute('class','emailjaregistrado')
        document.getElementById('Email').setAttribute('placeholder','Username não detectado')
    }

}
