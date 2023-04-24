// Escreva um código que capture os valores dos inputs do arquivo HTML, imprima estes valores no console, e em seguida, limpe os inputs

const nome = document.getElementById("nome")
console.log(nome.value)
nome.value = ""

const endereco = document.getElementById("endereco")
console.log(endereco.value)
endereco.value = ""

const email = document.getElementById("email")
console.log(email.value)
email.value = ""