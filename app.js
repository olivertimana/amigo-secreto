// Array para almacenar los nombres de los amigos
let amigos = [];


function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); 

    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    
    amigos.push(nombre);
    inputAmigo.value = '';

    
    actualizarLista();
}


function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '❌';
        botonEliminar.classList.add('delete-button');
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}


function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado} 🎉`;
    resultado.appendChild(li);
}
