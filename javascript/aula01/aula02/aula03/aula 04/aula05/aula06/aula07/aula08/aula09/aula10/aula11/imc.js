let continuar = true;

while (continuar) {
    // Pedindo os dados do usuário
    let peso = prompt("Qual é o seu peso em kg?");
    let altura = prompt("Qual é a sua altura em metros? (Ex: 1.75)");
    
    // Convertendo para números e calculando IMC
    let imc = Number(peso) / (Number(altura) * Number(altura));
    
    // Determinando a classificação
    let classificacao;
    
    if (imc < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'com peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'com sobrepeso';
    } else {
        classificacao = 'com obesidade';
    }
    
    // Mostrando o resultado
    alert(`Seu IMC é ${imc.toFixed(2)} - Você está ${classificacao}`);
    
    // Perguntando se quer continuar
    let resposta = prompt("Quer calcular outro IMC? (sim/não)");
    
    if (resposta.toLowerCase() !== 'sim') {
        continuar = false;
        alert("Valeu por usar a calculadora! Até a próxima! 👋");
    }
}