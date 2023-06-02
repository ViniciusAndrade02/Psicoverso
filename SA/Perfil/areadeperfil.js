let userna = document.getElementById("nome")
let nickname = document.getElementById("sobrenome")
let anodenascimento = document.getElementById("nascimento")
let celular = document.getElementById("telefone")
let endereco = document.getElementById("endereço")
let cep = document.getElementById("cep")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let olho = document.getElementById("olho")

let aparecernomedocliente=document.getElementById('lblperfil')

aparecernomedocliente.innerHTML=`Olá, ${JSON.parse(localStorage.getItem("nomeusuario"))}`


function Editar(){

    todoscadastros=JSON.parse(localStorage.getItem("armazenarnome"))//serve para pegar todos os cadastro feitos
    editarusuario=JSON.parse(localStorage.getItem("nomeusuario"))//serve para pegar o nome q usuario fais login

    for(i=0;i<todoscadastros.length;i++){

        if(todoscadastros[i].username==editarusuario){



            if(userna.value!=''){  //nome

                todoscadastros[i].username=userna.value
                editarusuario=todoscadastros[i].username
            }

            if(senha.value !=''){  //senha

                todoscadastros[i].password=senha.value
                todoscadastros[i].confirmpassoword=senha.value
            }

            if(nickname.value !=''){  //sobremome

                todoscadastros[i].sobrenome=nickname.value
            }

            if(anodenascimento.value !=''){ //nascimento

                todoscadastros[i].nascimento=anodenascimento.value
            }

            if(celular.value !=''){

                todoscadastros[i].telefone=celular.value
            }

            if(endereco.value !=''){

                
                todoscadastros[i].endereço=endereco.value
            }

            if(cep.value !=''){

                todoscadastros[i].cep=cep.value
            }


            if(email.value !=''){

                todoscadastros[i].email=email.value
            }

            localStorage.setItem("nomeusuario",JSON.stringify(editarusuario))
            localStorage.setItem("armazenarnome",JSON.stringify(todoscadastros))
            LimpaInputs()
        }
    }

}

function Sair(){

    let pegarnomeusuario=JSON.parse(localStorage.getItem("nomeusuario"))

    pegarnomeusuario=null

    localStorage.setItem("nomeusuario",JSON.stringify(pegarnomeusuario))

    window.location.href="../index.html"

}

function voltarprincipal(){

    window.location.href="../index.html"

}



function LimpaInputs()
{

    nome.value = ""
    sobrenome.value = ""
    nascimento.value = ""
    telefone.value = ""
    endereço.value = ""
    cep.value = ""
    email.value = ""
    senha.value = ""
}

//Mostrar a senha ou não

let input = document.getElementById("senha")
let inputOlho

function Change()
{

    inputOlho = input.getAttribute("type")

    if(inputOlho == "password"){

        input.setAttribute("type", "text")
        olho.src = "eye.svg"
    }else{

        input.setAttribute("type", "password")
        olho.src = "eye-off.svg"
    }
}