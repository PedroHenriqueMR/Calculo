import {soma, subitracao, multiplicacao, divisao} from './calculo.js'

let valor1 = 17;
let valor2 = 21;

const ad = soma(valor1,valor2)
const su = subitracao(valor1,valor2)
const mul = multiplicacao(valor1,valor2)
const di = divisao(valor1,valor2)


console.log("Resultado da Adção: "+valor1+" * "+valor2+" = "+ad)
console.log("Resultado da Subtração: "+valor1+" * "+valor2+" = "+su)
if(mul == 0){
    console.log("Multiplicar por zero sempre o resultado será zero!")
}else{
    console.log("Resultado da Multiplicação: "+valor1+" * "+valor2+" = "+mul)
};
if(di == Infinity || di == 0){
    console.log("Divisão por zero sempre irar retornar zero!")
}else{
    console.log("Resultado da Divisão: "+valor1+" / "+valor2+" = "+di.toFixed(2))
};
