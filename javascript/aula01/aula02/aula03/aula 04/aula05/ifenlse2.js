let idade = 17
let temDinheiro = false
let temCadUnico = true
// > maior que 
//>= maior ou igual a 
//< menor que 
// <= menor ou igual a 

if (idade >= 18) {
    if (temDinheiro == true) {
        console.log("Vamos pagar ou quebrar");
    }
    else {
        if (temCadunico == true) {
            console.log("CNH de graça");
        }
        else {
            console.log("pobrinho e sem cadastro");
        }
        console.log("pobre demais para dirigir");
    }
}
else {
    console.log("Muito novo para pilotar");
}