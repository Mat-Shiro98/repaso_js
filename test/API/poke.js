const $apiButtom = document.getElementById('apiButton');
const $apiData = document.getElementById('apiData');
const $base_experience = document.getElementById('base_experience');

const callApi = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $apiData.innerText = JSON.stringify(data);
        base_experience.innerText = `Nombre del pokemos: ${JSON.stringify(data.base_experience)}`
    })
    .catch(e => console.error(new Error(e)));
}

$apiButtom.addEventListener('click',callApi);