//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Função que adiciona os nomes das pessoas que estão no grupo de amigos:
function adicionarAmigo() {
    const inputField = document.getElementById('amigo');
    const nameList = document.getElementById('listaAmigos');
    const name = inputField.value.trim();

    // input de validação do campo de texto
    if (name === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Criando uma nova linha na lista de nomes gerais
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameList.appendChild(listItem);

    // input para limpar o campo de texto
    inputField.value = '';
}

// Função que escolhe o amigo que será sorteado aleatóriamente
function sortearAmigo() {
    const nameList = document.getElementById('listaAmigos');
    const names = Array.from(nameList.children).map(item => item.textContent);

    if (names.length === 0) {
        alert('A lista está vazia. Adicione os nomes de seus amigos antes de sortear!');
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const drawnName = names[randomIndex];

    // Display responsável por mostrar o nome sorteado
    const resultList = document.getElementById('resultado');
    resultList.innerHTML = `<li>${drawnName}</li>`;
}


