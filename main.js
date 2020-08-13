const promises = [];
for (let i = 1; i <= 20; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  promises.push(fetch(url).then(res => res.json()));
}

Promise.all(promises).then(results => {
  console.log(results);
 
const pokemon = results.map(data => ({
    name: data.name,
    id: data.id,
    image: data.sprites["front_default"],
    type: data.types.map(type => type.type.name).join(", "),
  }));
  displayPokemon(pokemon);
    });

    const displayPokemon = pokemon => {
        console.log(pokemon);
        const pokemonHTMLString = pokemon
          .map(
            pokeman =>
              `
          <li class="card">
              <img class="card-image" src="${pokeman.image}"/>
              <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
              <p class="card-subtitle">Type: ${pokeman.type}</p>
          </li>
          `
          )
          .join("");
        pokedex.innerHTML = pokemonHTMLString;
      };


// //default //fetching api from url and changeing to .json
// fetch(url).then( response => {
//     return response.json()
// }).then((data)=> {
    
//    //console log the data 
//     console.log(data)

//     //getting data as variable
//     let pokemonlist = data.results

//     //maping threw to return multiple
//     return pokemonlist.map((pokemon)=> {

//         //createing li and a
//         let li = document.createElement('li')
//         let a = document.createElement('a')

//         //changeing a properties
//         a.innerHTML = pokemon.name
//         a.href = pokemon.url

//         //giveing li classname and joining a to li
//         li.className = 'Bleh' 
//         li.appendChild(a)   

//         //joining li to root div
//         root.appendChild(li)
        
//     })
// })
