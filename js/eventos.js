document.querySelector("#div").addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
    alert("Hola! Soy el div");
}


/* otra forma*/

let div=document.querySelector("#div");

div.addEventListener("click", function (){
    alert("Hola! Soy el div")
})

