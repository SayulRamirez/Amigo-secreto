let amigos = [];

function agregarAmigo() {

    let amigoIngresado = document.getElementById('amigo');

    let amigo = amigoIngresado.value.trim();

    if (amigo === "") {
        alert('Por favor, inserte un nombre.');
        return;
    } 
    
    amigos.push(amigo);

    amigoIngresado.value = '';

    agregarElementoLi('listaAmigos', amigos[(amigos.length - 1)]);
}

function agregarElementoLi(id, contenido) {
    let nuevoElemento = document.createElement('li');

    nuevoElemento.textContent = contenido;
    document.getElementById(id).appendChild(nuevoElemento);
}

function sortearAmigo() {

    let numeroAmigos = amigos.length;

    if (numeroAmigos === 0) {
        alert('No tienes amigos en la lista');
        return;
    } 

    let amigoSecreto = amigos[Math.floor(Math.random() * numeroAmigos)];
    agregarElementoLi('resultado', `Tú amigo secreto es: ${amigoSecreto}`);
}