async function obtenerDatos() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const data = await res.json();

        console.log("Altura de Pikachu:", data.height);
        console.log("Peso de Pikachu:", data.weight);
    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerDatos();
