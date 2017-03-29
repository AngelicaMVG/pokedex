function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.puntosAtaque = puntosAtaque;
  this.vida = 100;

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

}

var pokemons = [];
function crearPokemon(){
  var nombrePokemon = document.getElementById('nombrePokemon');
  var colorPokemon = document.getElementById('colorPokemon');
  var puntosAtaque = document.getElementById('puntosAtaque');

  var pokemon = new Pokemon( nombrePokemon.value,
                             colorPokemon.value,
                             parseInt(puntosAtaque.value)

                           )

  pokemons.push(pokemon);
  mostrarPokemon()

}

function mostrarPokemon(){
  var pokemon1 = document.getElementById('lista1');
  var pokemon2 = document.getElementById('lista2');
  var elemento1 = document.createElement("option");
  elemento1.innerText = pokemons[pokemons.length - 1].nombre;
  pokemon1.appendChild(elemento1);
  var elemento2 = document.createElement("option");
  elemento2.innerText = pokemons[pokemons.length - 1].nombre;
  pokemon2.appendChild(elemento2);
}

function pelear() {
  var pokemon1 = document.getElementById('lista1');
  var pokemon2 = document.getElementById('lista2');
  if(pokemon1.selectedIndex === pokemon2.selectedIndex){
    alert('No puedes pelear contra ti mismo ');
  };
}
// function seleccionaPokemon() {
//   var pokemon1 = document.getElementById('lista1');
//   var pokemon2 = document.getElementById('lista2');
//   if(pokemon1.selectedIndex === pokemon2.selectedIndex){
//     alert('No puedes pelear contra ti mismo ');
//   };
//
//   pelear()
// }
//
// function pelear(){
//
//   pokemon2 = pokemon2.vida - pokemon1.puntosAtaque;
//   var p = document.createElement("p");
//   p.innerHTML = 'Pokemon1 ataco Pokemon2 y Pokemon 2 tiene ' + pokemon2 + ' de vida.'
// }
