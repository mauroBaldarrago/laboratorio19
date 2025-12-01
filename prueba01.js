let id = prompt("Ingresa un ID de Pokémon:");

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
      console.log("Nombre del Pokémon:", data.name);
  })
  .catch(err => {
      console.error("Error:", err);
  });
