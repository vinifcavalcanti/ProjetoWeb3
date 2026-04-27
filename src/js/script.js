//Método de limpeza e validação

const email = "   fiap@email.com    ";
const emailLimpo = email.trim(); //remove espaços (Início e fim)
// Método está sempre ligado a um objeto
console.log(emailLimpo)

//Validar: Verifica se o domínio é válido 

if(emailLimpo.includes("@")){
    console.log("Email válido.")
}else{
    console.log("Email inválido.")
}

//Métodos de transformação de texto (split, toLowerCase, Join)

const tituloArtigo = "Aprendendo JavaScript RAIZ DEV";

const texto1 = tituloArtigo.toLowerCase();
console.log(texto1);

const texto2 = tituloArtigo.split(" ");
console.log(texto2);

//Split transforma o texto em array []

//O Join faz o inverso, ele junta tudo em uma unica string
const texto3 = texto2.join("");
console.log(texto3)

//Método tofixed

const precoProduto = 199.99;
const desconto = 0.15; //15%
const precoFinal = precoProduto* (1- desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`)