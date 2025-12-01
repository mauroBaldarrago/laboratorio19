fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then(res => res.json())
  .then(data => {
      console.log("URL del sprite:", data.sprites.front_default);
  })
  .catch(err => {
      console.error("Error:", err);
  });
