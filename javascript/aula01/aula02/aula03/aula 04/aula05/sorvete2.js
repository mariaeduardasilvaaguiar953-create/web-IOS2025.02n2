let dinheiro = 30
let precoSorvete = 15
let saborEscolhido = "baunilha"

if (dinheiro >= precoSorvete) {
    // Se o cliente tem dinheiro suficiente
    console.log(" Temos os seguintes sabores: baunilha, morango e ceu-azul");
    if (saborEscolhido == "baunilha" || saborEscolhido == "morango" || saborEscolhido == "ceu-azul") {
        console.log("Aqui esta seu sorvete de" + saborEscolhido);

    }
    else {
        console.log(" Não temos esse sabor desculpe 😥");
    }
}
else {
    // Se o cliente Não tem dinheiro suficiente
    console.log(" tá pobrinho amiguinho");
}