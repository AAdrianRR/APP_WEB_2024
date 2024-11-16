function operacion() {
    // Obtener los valores ingresados en los campos de número
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    
    // Obtener el tipo de operación seleccionada
    let tipo = document.getElementById("tipo").value;

    // Declarar una variable para almacenar el resultado
    let resultado = 0;

    // Verificar qué operación se seleccionó y realizar la operación
    switch (tipo) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
