// // // // let nome = ["Paula Ribeiro","Ana Julia","Israel de Oliveira"];

// // // // // Enquanto é um laço de repetição que sempre ira "rodar" enquanto
// // // // // a condição passada for verdadeira.
// // // // let contador = 0
// // // // while (contador < 10) {
// // // //     alert(contador);
// // // //     contador = contador + 1


// // // // }


// // // let contador = 0
// // // while (contador <= 20) {
// // //     alert(contador);
// // //     contador = contador +2
// // // }

// // let nome = ["Paula Ribeiro","Ana Julia","Israel de Oliveira"];
// // let indice = 0;
// // let encerrar = 0;

// // while (encerrar <= nomes.leght) {
// //     console.log(nomes[indice]);
// //     nomes.splice(indice, 1);
// //     console.log(nomes)
// // }

// let nome = "admin"
// let tentativa = prompt("Digite seu nome")

// while (tentativa != nome) {
//     alert("Errado, tente de novo. ")
//     tentativa = prompt("Digite o nome novamente")
// }
// alert("Acertou o nome!")

let nome = ["Paula Ribeiro","Ana Julia","Israel de Oliveira","Bruno fernandes","Zacarias"];

// Ordena os itens de array em ordem alfabetica
nomes.sort();

// Cria a listagem do item
nomes.forEach(nome => {
    console.log(nome);
    
})


nomes.splice(indice,1);

console.log(nomes)

let receitas = ["bolo de cenoura","ovo cozido","Bife frito","Salada"]