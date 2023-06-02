window.addEventListener('scroll', () => {

    if( window.scrollY>200 &&  window.scrollY<625){

        document.getElementById('botaodireita').setAttribute('class','animarbotaodireita')
    }


})



const imgs=document.getElementById('img')
const img=document.querySelectorAll('#img img') //pegar elemento de cada imagem dentro do id img

let idx=0

function carrossel(){

    idx++;

    if(idx > img.length -1){

        idx=0
    }

    imgs.style.transform= `translateX(${-idx * 500}px)`
}

setInterval(carrossel,2500);