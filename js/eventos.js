const botonProgreso = document.querySelector("#botonProgreso")
const botonFormulario = document.querySelector("#botonFormulario")
const barraProgreso = document.querySelector("#progreso")
const botonColorDeFondo = document.querySelector("#botonColorDeFondo")

/* funciones anonimas    ----------------------------------------------*/
botonProgreso.onclick = ()=> {
    mostrarOcultarProgressBar()
}

botonFormulario.onclick = ()=>{
    irAformulario()
}

botonColorDeFondo.onclick = ()=>{
    aplicoColor()
}
/*-------------------------------------------------------------------------*/


