
document.addEventListener('DOMContentLoaded', () =>{

    const usernameInput = document.getElementById('usernameInput');
    const saveUsernameButton = document.getElementById('saveUsername');
    const usernameDisplay = document.getElementById('usernameDisplay');
    
    saveUsernameButton.addEventListener('click', () =>{
    const username = usernameInput.value;
    localStorage.setItem('username', username)
    usernameDisplay.textContent = `Nombre de usuario guardado: ${username}`
    });

})

document.addEventListener('DOMContentLoaded', () =>{

    const lenguageInput = document.getElementById('lenguageInput');
    const saveLenguageButton = document.getElementById('saveLenguage');
    const lenguageDisplay = document.getElementById('lenguageDisplay');
    
    saveLenguageButton.addEventListener('click', () =>{
    const lenguage = lenguageInput.value;
    sessionStorage.setItem('lenguage', lenguage)
    lenguageDisplay.textContent = `Idioma guardado en la session: ${lenguage}`
    });

})
