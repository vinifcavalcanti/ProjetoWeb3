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

//DOM (Document Object Model) Modelo de docmento
//Permite o JS conversar com o navegador
//Para manipular o HTML e CSS

const titulo = document.getElementById("titulo");
titulo.innerText = "DOM transformando o texto";
titulo.style.color = "blue";


const produtos = [
    {nome: "Teclado Gamer", preco: 200, emPromocao:true},
    {nome: "Mouse Gamer", preco: 150, emPromocao:false},
    {nome: "Monitor", preco: 1300, emPromocao:true},
    {nome: "Pad Mouse", preco: 50, emPromocao:false},
];

console.log(produtos)
const container = document.getElementById("lista-produtos");
const mostarTotal = document.getElementById("resultado-total")

function produtosCard(lista){
    mostarTotal.innerHTML = "";
    const htmlProdutos = lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço R$ ${item.preco}</p>
            ${item.emPromocao ? '<span>Promoção</span>' : ''}
        </div>
        `).join(""); //Transforma o array em uma única string

        container.innerHTML = htmlProdutos;
} 
//produtosCard(produtos);
//Callback, função chama outra função
//map é uma função de array

//Filter - Cria uma nova lista apenas com o que pesquisar

function filtrarPromocoes(){
    const promocionais = produtos.filter(item => item.emPromocao);
    produtosCard(promocionais);
}

//Reduce - Reduz o array em um unico valor(soma de proços)

function calcularTotal(){
    const total = produtos.reduce((acumulador, item) => {
        return acumulador + item.preco;
    },0);
    mostarTotal.innerText = `Valor Total R$ ${total}`;
}