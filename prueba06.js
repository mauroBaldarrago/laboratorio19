let randomId = Math.floor(Math.random() * 898) + 1;

console.log("ID aleatorio generado:", randomId);

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then(res => res.json())
  .then(data => {
      console.log("Pokémon aleatorio:", data.name);
  })
  .catch(err => console.error("Error:", err));
