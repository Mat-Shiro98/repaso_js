function agregarItem(){
    const nuevoItemInput = document.getElementById('nuevoItem');
    const nuevoItem = nuevoItemInput.value;

    const nuevoItemElemento = document.createElement('li');
    nuevoItemElemento.textContent = nuevoItem;

    nuevoItemElemento.addEventListener('click',function(){
        this.classList.toggle('comprado')
    })

    document.getElementById('listaCompras').appendChild(nuevoItemElemento)

    nuevoItemInput.value = '';
}


function limpiarComprados(){
    const lista = document.getElementById('listaCompras')
    const elementoComprados = lista.querySelectorAll('.comprado')

    elementoComprados.forEach(function(elemento){
        lista.removeChild(elemento)
    })
}