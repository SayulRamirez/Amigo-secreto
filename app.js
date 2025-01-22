let amigos = [];

function agregarAmigo() {

    let amigoIngresado = document.getElementById('amigo');

    if (amigoIngresado.value.trim() === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigoIngresado.value);

        amigoIngresado.value = '';
        console.log(amigos)

        actualizarAmigos();
    }
}

function actualizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos'); 
    let nuevoAmigo = document.createElement('li'); 

    nuevoAmigo.textContent = amigos[(amigos.length - 1)]; 
    listaAmigos.appendChild(nuevoAmigo);
}

function agregarElementoLi(id, contenido) {
    let lista = document.getElementById(id);
    let nuevoElemento = document.createElement('li');

    nuevoElemento.textContent = contenido;
    lista.appendChild(nuevoElemento);
}

function sortearAmigo() {

    let numeroAmigos = amigos.length;

    if (numeroAmigos === 0) {
        alert('No tienes amigos en la lista');
    } else {

        let amigoSeccreto = amigos[Math.floor(Math.random() * numeroAmigos)];
        agregarElementoLi('resultado', "Tú amigo secreto es: " + amigoSeccreto);
    }
}