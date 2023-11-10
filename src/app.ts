const  fetchURL = 'http://localhost:8080/mydrugs'

async function fetchCharacters(){
    const response = await fetch(fetchURL);
    const data = await response.json() as product;

    console.log(data)
    displayCharacters(data);
}

interface product{
    id: number,
    nombredelProducto: string,
    descripción: string,
    inventario: string
}

interface product extends Array<product>{};


function displayCharacters(characters: product){
    const container = document.getElementById('characters-container');
    if(container){
       for(let elements of characters){
            container.innerHTML +=`
            <div class="character-card">
            <h2>${elements.id}</h2>
            <p>${elements.nombredelProducto}</p>
            <p>${elements.descripción}</p>
            <p>${elements.inventario}</p>
            </div>`;
            
       }
    }
}

fetchCharacters();



/* la funcionalidad de try catch es la del manejo de los errores, si es que en el try hay algún error
salta al catch podemos poner un mensaje de error  */
/* const personajes = "https://rickandmortyapi.com/api/character";

function makeCard (character: { name: string, status: string, image: string }){
    const {name, status, image} = character;
    const container = document.querySelector(".cards-container");

    const title = document.createElement("h5");
    title.textContent = name;

    const characterStatus = document.createElement("p")
    characterStatus.textContent = status;

    if (status == "Alive") characterStatus.style.color = "greeen";
    else characterStatus.style.color ="gray" 

    const characterImage = document.createElement("img")
    characterImage.src = image;
    characterImage.width = 300;

    const Card = document.createElement("div");
    Card.appendChild(title);
    Card.appendChild(characterImage);
    Card.appendChild(characterStatus);
    Card.style.backgroundColor = "white";

    container?.appendChild(Card);
} */
//aqui estamos manupulando un array de personajes asi que recorreremos 




/* async function getcharacters(){ //el tipo de respuesta va a devlover una promesa esta puede ser nula o un valor, asyn permite usar await y asi se puede esperar que la promesa sea devuelta
   try {
    const response = await fetch(personajes); // con el await se espera que las promesa sea resuelta
   const { results } = await response.json();

   for (let i = 0; i < results.length; i++) {
    makeCard(results[i]);
   }
   console.log(results);
   } catch (error) {
    console.error(error)
   }
}

getcharacters();
 */

/* const  urlMy = 'http://localhost:8080/mydrugs' */
/* 
async function fetchProducts(){
    const response = await fetch(urlMy);
    const data = await response.json();

    displayProdcucts(data.results);
}

interface product{
    id: number,
    nombredelProducto: string,
    descripción: string,
    inventario: string
}

interface product extends Array<product>{}



function displayProdcucts(products: product[]){
    const container = document.getElementById('producto-container');
    if(container){
        products.forEach(productos => {
            container.innerHTML +=`
            <div class="character-card">
            <img src="${productos.id}" alt="${productos.id}">   
            <h2>${productos.nombredelProducto}</h2>
            <p>${productos.descripción}}</p>
            <p>${productos.inventario}}</p>
            </div>`;
        });
    }
}

fetchProducts(); */