let login = prompt("Insira seu e-mail:")
let senha = prompt("Insira sua senha:")
let loginCerto = "mariaeduardasilvaaguiar953@gmail.com"
let senhaCerta = "morangodoamor"

// Validar se login é certo e se a senha tambem é
if (login == loginCerto && senha == senhaCerta) {
    alert("Credencial validada.")

    alert("opcao 1:Crédito \n Opcao 2:Consignado \n Opcao 3:Empréstimo \n Opcao 4:Renegociar \n Opcao 0:Falar com atendente")
   
    let opcao =Number (prompt("Escolha a opcao:"))

    switch (opcao) {
        case 1:
            alert ("Voce selencionou crédito. Redirecionando para o setor responsavél")
            break;
        case 2:
            alert ("Voce selencionou consignado. Redirecionando para o setor responsavél")
            break;
        case 3:
            alert ("Voce selencionou empréstimo. Redirecionando para o setor responsavél")
            break;
        case 4:
            alert ("Voce selencionou renegociar. Redirecionando para o setor responsavél")
            break;
        case 0:
            alert ("Aguarde enquanto localizamos um atendente")
            break;
        
       
            default:
                alert ("O usuario não selecionou uma opcao válida. Encerrando atendimento")
            break;
    }
}
// Se o login ou a senha que o usuário inseriu não forem iguais a que temos,ele não pode fazer login no aplicativo
else{
    alert("Login ou senha incorretos!")
}