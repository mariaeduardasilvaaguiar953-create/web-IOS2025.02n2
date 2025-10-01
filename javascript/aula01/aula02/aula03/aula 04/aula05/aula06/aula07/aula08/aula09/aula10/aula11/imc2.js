let calcularImc = (peso, altura)
// A fórmula do IMC é peso / (altura * altura)
const imc = peso / (altura * altura);

// Usa a estrutura if...else para classificar o IMC
if (imc < 18.5) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
} else if (imc >= 18.5 && imc < 24.9) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`;
} else if (imc >= 25 && imc < 29.9) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
} else if (imc >= 30) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade.`;
}


// Exemplo de uso
const resultado = calcularImc(70, 1.75);
console.log(resultado);
// Saída: "Seu IMC é 22.86. Você está com peso normal."

const resultado2 = calcularImc(95, 1.80);
console.log(resultado2);
// Saída: "Seu IMC é 29.32. Você está com s