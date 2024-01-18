function agregarItem(){
    const nuevoItemInput = document.getElementById('nuevoItem');
    const nuevoItem = nuevoItemInput.value;

    const nuevoItemElemento = document.createElement('li');
    nuevoItemElemento.textContent = nuevoItem;

    nuevoItemElemento.addEventListener('click',function(){
        this.classList.toggle('comprado')
    })
}