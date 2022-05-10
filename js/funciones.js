function aplicoColor() {
    let colorActual = document.body.bgColor
        switch (colorActual) {
            case "":
                document.body.bgColor = "white"
                break
            case "white":
                document.body.bgColor = "darkred"
                break
            case "darkred":
                document.body.bgColor = "green"
                break
            case "green":
                document.body.bgColor = "yellow"
                break
            case "yellow":
                document.body.bgColor = "blue"
                break
            case "blue":
                document.body.bgColor = "black"
                break
            default:
                document.body.bgColor = "white"
        }
}

function mostrarOcultarProgressBar() {
    document.querySelector("#progreso").classList.toggle("hide")
}

function irAformulario() {
    location.target = "_self"       //_self //_blank
    location.href = "formulario.html"
}

let contenido
const cargoSelect = ()=>{
    for(let i = 0; i < 15000; i++){
        contenido += `<option> Seleccion ${i}</option>`
    }
    select.innerHTML = contenido
}


$('h4')