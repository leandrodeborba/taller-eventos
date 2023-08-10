document.querySelector("#btnSaludar").addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
    alert("Hola! ");
}


/* otra forma*/


let div=document.querySelector("#div");

div.addEventListener("click", function (){
    alert("Hola! Soy el div")
})

