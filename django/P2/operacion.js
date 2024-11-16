function operacion() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let tipo = document.getElementById("tipo").value;
    let resultado = 0;

    switch (tipo) {
        case "circulo":
            resultado = Math.PI * Math.pow(num1, 2);

            
            break;
        case "cuadrado":
            resultado = num1 * num1;    
            break;
        case "rectangulo":
            resultado = num1 * num2;
            break;
        case "triangulo":
            resultado = (num1 * num2) / 2;
            break;
        
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function validarEntrada(event) {
    let valor = event.target.value;
    event.target.value = valor.replace(/[^0-9.]/g, ''); 
}
