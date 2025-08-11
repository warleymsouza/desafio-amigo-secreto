//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolvr o problema.e
let listaSorteio = [];

function adicionarAmigo(){
    let campo = document.getElementById('amigo');
    let nome = campo.value.trim();

    if(nome ==''){
        alert('Digite um nome antes de adicionar!');
        return;
    }
    listaSorteio.push(nome);
    campo.value='';
    mostrarAmigos();
}
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML= '';

    for(let i = 0; i< listaSorteio.length; i++ ){
        let li = document.createElement('li');
        li.textContent = listaSorteio[i];
        lista.appendChild(li);
    }
    
}
function sortearAmigo(){
    if(listaSorteio.length === 0){
        alert('A lista está vazia! Adicione amigos primeiro.');
        return
    }
    
    let indiceAleatorio = Math.floor(Math.random()* listaSorteio.length);
    let amigoSorteado = listaSorteio[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}