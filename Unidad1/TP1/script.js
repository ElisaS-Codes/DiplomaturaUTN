function cambiarPrecio() {

    let tipo = document.form_solicitar.tipo.value
    let precio

    switch (tipo){
        case "1":
            precio = 500
            break
        case "2":
            precio = 1000
            break
        case "3":
            precio = 1500
            break
        default:
            precio = "error"
            break
    }

    document.getElementById("precio").innerHTML = "$" + precio
}