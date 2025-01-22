let amigos = [];

function agregarAmigo() {

    let amigoIngresado = document.getElementById('amigo');

    if (amigoIngresado.value.trim() === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigoIngresado.value);

        amigoIngresado.value = '';
        console.log(amigos)

    }
}