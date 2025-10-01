let login
let loginCerto = "mariaeduardasilvaaguiar953@gmail.com"
let senhaCerta = "morangodoamor"
let senha
//Enquanto sua senha que o usuario inserir for diferente da senha certa continuaremos pedindo para que ele insiraa novamente




//Do = Faça e While = enquanto. O que dá nome a estrutura dowhile, ou sejam, faça enquanto.
//Dowhile executa o código uma vez antes de fazer a comparação.
do {
     senha = prompt("Insira sua senha:")
} while (senha != senhaCerta);
do {
     login = prompt("Insira seu e-mail:")
} while ( login != loginCerto);


//Peça a senha pelo menos uma vez, e caso o usuario não coloque a senhacerta, repita o pedido
