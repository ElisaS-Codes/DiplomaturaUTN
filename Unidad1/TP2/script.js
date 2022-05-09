// Calc Correcta

let operar = (operacion) => {
    let n1 = Number(document.getElementById("campo1").value)
    let n2 = Number(document.getElementById("campo2").value)
    let resultado = operacion(n1, n2)

    document.getElementById("resultado").innerHTML = resultado
}









// Calculadora 2, no sigue la consigna

let nuevoDigito = (digito) => {
    display *= 10
    display += digito

    refreshDisplay()
}

let clearDisplay = () => {
    display = 0

    refreshDisplay()
}

let refreshDisplay = () => {
    document.getElementById("display").innerHTML = display
}

let opBoton = (op) => {

    temp = display
    switch (op){
        case "suma":
            operacion = i => temp + i
            break
        case "resta":
            operacion = i => temp - i
            break
        case "divi":
            operacion = i => temp / i
            break
        case "multi":
            operacion = i => temp * i
            break
    }

    clearDisplay()
}

let opIgual = () => {

    display = operacion(display)
    refreshDisplay()
}


var display = 0
var temp = 0
var operacion = refreshDisplay