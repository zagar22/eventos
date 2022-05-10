const sinConexion = ()=>{
    console.error('Se perdio la conexion a Internet')
    btnEnviar.setAttribute("disabled", true)

}

const connConexion = ()=>{
    console.warn('Retorno la conexion')
    btnEnviar.removeAttribute("disabled")
}

window.addEventListener("offline", sinConexion )

window.addEventListener("online", connConexion)


/*
console.log()
console.info()
console.warn()
console.error()
console.table() para ver array de elementos y/o objetos JSON
*/