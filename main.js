//empty array for promises
// const promises = [];
// //looping threw list
// //for (let b = 21; b <= 20; b++)
// for (let i = 1; i <= 250; i++) {
//     //etting url and ammount of pokemon to display from loop
//   const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//   promises.push(fetch(url).then(res => res.json()));
// }

// Promise.all(promises).then(results => {
//   console.log(results);
//  //mapping threw pokemon and pulling out specfic data
// const pokemon = results.map(data => ({
//     name: data.name,
//     id: data.id,
//     image: data.sprites["front_default"],
//     type: data.types.map(type => type.type.name).join(", "),
//   }));
  //calling function to display pokemon
  // displayPokemon(pokemon);
  //   });

  //   //function to display pokemon
  //   const displayPokemon = pokemon => {
  //       console.log(pokemon);
  //       //mapping threw pokemon and changeing pulled out info into cards
  //       const pokemonHTMLString = pokemon
  //         .map(
  //           pokeman =>
  //             `
  //         <li class="card" }>
  //             <img class="card-image" src="${pokeman.image}"/>
  //             <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
  //             <p class="card-subtitle">Type: ${pokeman.type}</p>
  //         </li>
  //         `
  //         )
      //     .join("");
      //     //changeing ul to = the cards
      //   pokedex.innerHTML = pokemonHTMLString;
      // };




      

const url = "https://pokeapi.co/api/v2/pokemon/";
//default //fetching api from url and changeing to .json
fetch(url).then( response => {
    return response.json()
}).then((data)=> {
    
   //console log the data 
    console.log(data)

    //getting data as variable
    let pokemonlist = data.results


    //maping threw to return multiple
     pokemonlist.map((pokemon)=> {

        //createing li and a
        let li = document.createElement('li')
        let a = document.createElement('a')

        //changeing a properties
        a.innerHTML = pokemon.name
        a.href = pokemon.url

        //giveing li classname and joining a to li
        li.className = 'Bleh' 
        li.appendChild(a)   

        //joining li to root div
        pokedex.appendChild(li)
        
    })
})


// function change(){
  
//     var linkElement = document.getElementById("link");
//     linkElement.href = "http://bing.com";
     
//   }
//   <a href="http://google.com" id="link">This goes somewhere...</a>
//   <button onClick="change()">Change link</button>