async function buscarPokemon() {
    const id = document.getElementById("pokeId").value.trim();

    if (!id) {
        document.getElementById("resultado").innerHTML = "<p>Ingresa un ID válido</p>";
        return;
    }

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            document.getElementById("resultado").innerHTML = "<p>Pokémon no encontrado</p>";
            return;
        }

        const data = await res.json();

        const habilidades = data.abilities
            .map(a => a.ability.name)
            .join(", ");

        document.getElementById("resultado").innerHTML = 
            `
            <div class="card">
                <img src="${data.sprites.front_default}" alt="pokemon">
                <h3>${data.name}</h3>
                <p>ID: ${data.id}</p>
                <p>Peso: ${data.weight}</p>
                <p>Altura: ${data.height}</p>
                <p><strong>Habilidades:</strong> ${habilidades}</p>
            </div>
            `
        ;

    } catch (error) {
        document.getElementById("resultado").innerHTML = "<p>Error al cargar datos</p>";
        console.error(error);
    }
}
