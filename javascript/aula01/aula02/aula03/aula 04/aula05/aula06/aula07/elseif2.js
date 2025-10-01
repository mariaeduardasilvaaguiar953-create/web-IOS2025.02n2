let credencial ="PJ"


if (credencial == "Visitante") {
    console.log("Voce so pode ir onde seu anfitrião for");
}
else if (credencial == "estagiario") {
    console.log("Voce so pode acessar as baias de trabalho e refeitorio");
}
else if (credencial == "aprendiz") {
    console.log("Voce so pode acessar as areas de lazer, baias e refeitorio");
}
else if (credencial == "CLT") {
    console.log("Voce so pode acessar udo, exceto a diretoria");
}
else if (credencial == "CEO") {
    console.log("O ceú é o limite");
}
console.log("credencial invalida. ACESSO NEGADO");



