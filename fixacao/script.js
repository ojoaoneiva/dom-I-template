// 1. A partir do template, crie um código que leia o valor innerHTML do elemento P que está na página.

// 2. Depois disso, Utilize o input que está na página para digitar um novo valor, e a cada vez que um caractere for digitado, imprima no console o valor atual do input.

// 3. Crie um botão, e neste botão adicione um evento que, ao ser clicado, substitua o valor do elemento P pelo valor que está no input.

const p = document.getElementById("paragrafo")
console.log(p.innerHTML)

const input = document.getElementById("texto")
function teclado() {
    console.log (input.value)
}

function substituir() {
    p.innerHTML = input.value
    input.value = ""
}