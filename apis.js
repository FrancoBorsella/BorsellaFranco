/*API RAZA DE PERROS*/

function api1(){

    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com',
		    'X-RapidAPI-Key': 'bc8296fb33msh820c44109bb37eep19549ajsn7f331c3e7583'
	    }
    };

    fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds', options)
	    .then(response => response.json())
	    .then(response => {
            console.log(response);
            let indice = indiceAleatorio();
            const html = `
                <div class="raza"><b>Raza:</b> ${response[indice].breed}</div>
                <div class="origen"><b>Origen:</b> ${response[indice].origin}</div><br>
                <img class="imgperro" src=${response[indice].img}>
            `

            const perrosSection = document.querySelector('.contenedorAPI1')
            perrosSection.innerHTML = html
        })
	    .catch(err => console.error(err));
    
    /*FUNCION QUE DEVUELVE UN INDICE ALEATORIO ENTRE 1 Y 575 (TAMAÑO DEL ARRAY QUE DEVUELVE LA API), PARA MOSTRAR INFORMACIÓN SOBRE UNA RAZA DE PERRO ALEATORIA*/
    function indiceAleatorio() {
        let indice = (Math.trunc(Math.random()*575)+1);
        return indice;
    }
}

/*API POKEMON ALEATORIO*/

/*FUNCION QUE DEVUELVE UN NÚMERO ALEATORIO ENTRE 1 Y 151, PARA MOSTRAR LOS PRIMEROS 151 POKEMON*/
function numeroAleatorio() {
    let num = (Math.trunc(Math.random()*151)+1);
    return num;
}

let numpoke = numeroAleatorio();
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: numpoke,
}

function api2(){

    const {url, type, id} = apiData
    const apiURL = `${url}${type}/${id}`;

    fetch(apiURL)
        .then((data)=> data.json())
        .then((pokemon)=> generarHtml(pokemon));

    const generarHtml = (data) => {
        console.log(data);
        const html = `
            <div class="nombre"> Nombre: ${data.name}</div>
            <div class="detalles">
                <span> Altura: ${data.height} </span><br>
                <span> Peso: ${data.weight} lbs</span><br>
            </div>
            <img class="imgpoke" src=${data.sprites.front_default}>
        `
        const pokemonSection = document.querySelector('.contenedorAPI2');
        pokemonSection.innerHTML = html;
    }
}

