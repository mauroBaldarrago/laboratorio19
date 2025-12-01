fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res => res.json())
  .then(data => {
      console.log("Altura de Pikachu:", data.height);
      console.log("Peso de Pikachu:", data.weight);
  })
  .catch(err => {
      console.error("Error:", err);
  });
