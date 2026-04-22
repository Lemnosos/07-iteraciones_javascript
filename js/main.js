

//suma numero de 1 a 100
function sumNumeros(n1, n2) {
    let resultado = 0;
    for (let i1 = n1; i1 <= n2; i1++) {
        resultado += i1;
    }
    return resultado;
}
console.log(sumNumeros(1, 100));


//imprimir pares entre 0 y 50
function imprimirPares(n1, n2) {
    if (n1 % 2 != 0) {
        n1++;
    }
    let solucion = [];
    for (let i2 = n1; i2 <= n2; i2 += 2)
        solucion.push(i2);
    return solucion;
}
console.log(imprimirPares(0, 50));


//tabla multiplicar
function tablaMultiplicar(num) {
    let solucion = [];
    for (let i3 = 1; i3 <= 10; i3++)
        solucion.push(`${num} x ${i3} = ${num * i3}`);
    return solucion;
}
let num = prompt("Introduce el número del que quieras saber la tabla de multiplicar")
console.log(tablaMultiplicar(num));


//cuenta regresiva
function cuenta(n1, n2) {
    if (n1 < n2)
        return "Cuenta erronea. el primer numero debe ser mayor que el segundo";
    for (let i4 = n1; i4 >= n2; i4--)
        console.log(i4)
}
cuenta(10, 1)


//factorialde un numero
function calcularFactorial(num) {
    let resultado = 1;
    for (let i5 = num; i5 >= 1; i5--)
        resultado *= i5;
    return resultado
}
let num5 = prompt("Introduce el numero del q saber el factorial")
console.log(`El factorial de ${num5} es ${calcularFactorial(num5)}`)

