/*
const reciboFoco = ()=>{
    nombre.style.backgroundColor = "lime"
}

const pierdoFoco = ()=>{
    nombre.style.backgroundColor = "white"
}

nombre.addEventListener("focus", reciboFoco)
nombre.addEventListener("blur", pierdoFoco)
*/

const reciboFoco = (campo)=>{
    campo.style.backgroundColor = "lime"
}

const pierdoFoco = (campo)=>{
    campo.style.backgroundColor = "white"
}


for(const campo of campos){
    campo.addEventListener("focus", ()=> {reciboFoco(campo)})
    campo.addEventListener("blur", ()=> {pierdoFoco(campo)})
    campo.addEventListener("keypress", (e)=>{
        if(e.key == "Enter"){
            //comentario
            let pos = campo.tabIndex
            let ultimoTabIndex = (pos == (campos.length -1))
            if(ultimoTabIndex){
                campos[0].focus()
            }else{
                campos[pos + 1].focus()
            }
        }
    })
}
 

//document.addEventListener("keypress", (e)=> {console.log(e)})

// validaciones en formularios
formulario.addEventListener("submit", (e)=>{
    e.preventDefault() // evitar que se ejecute el procesamiento del motor web html
    console.log("se pulso en boton enviar")
    formulario.method = "POST"
    formulario.action = "https://procesaformulario.com/"
    formulario.enctype = "plain/text"
    formulario.submit()


})

//const ER = / \w /
//expresiones regulares -- textos signos y numeros

/*
\w: word - caracteres alfanumericos
\W: not word - negacion de word
\d: digitos
\D: not digits - negacion de digitos
\s: signos : espacio - saltos de linea- signos de puntuacion y expresion

*/

//Caracteres especiales
/*
{N}: un numero
{N, M}: dos o mas numeros, {N} minimo de caracteres aceptables
                            {M}maximo de caracteres aceptables
*: entre 0 (cero) y muchas instancias del caracter {0, }
*(): entre 1 y muchas instgancias del caracter{1,10}             
*/

// caracteres de posicion
/*
caracter de carret ^: el caracter a buscar se encuentra al comienzo del string 
$: el final de todo un string
boundry \b : en el final de una palabra
*/

let reDigitosTelefono = /^[0-9]{8,15}$/
//let reCaracteresNombre = /^\w{5,10}$/

let reCaracteresNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/    // validar Ñ dieresis, acentos y apostrofes





//telefono
const validaIngresoTelefono = ()=>{
    debugger
    valor = parseInt(telefono.value)                  // parseInt() parseFloat() Number()
    const res = reDigitosTelefono.test(valor)
    //operador ternario
    res ? console.log("Paso la validacion del formulario"):  console.log("No Paso la validacion del formulario")
    // condicional normal
    //if(res){
    //    console.log("Paso la validacion del formulario")
    //}else{
    //    console.log("No Paso la validacion del formulario")
    //}
}

const validaNombre = ()=>{
    valor = nombre.value                 
    const res = reCaracteresNombre.test(valor)
    // Operador Ternario
    res ? console.log("Paso la validacion del nombre"): console.log("No Paso la validacion del nombre")

    //if(res == true){
    //    console.log("Paso la validacion del nombre")
    //}else{
    //    console.log("No Paso la validacion del nombre")
    //}
}

// cargo combo slect comn JS 
let contenido
const cargoSelect = ()=>{
    for(let i = 0; i < 15000; i++){
        contenido += `<option> Seleccion ${i}</option>`
    }
    select.innerHTML = contenido
}



