async function buscarTipos() {
    const card = document.getElementById("card");
    const valor = document.getElementById("pokeInput").value.trim();

    if (!valor) {
        card.innerHTML = "<p>Ingresa un nombre o ID válido</p>";
        return;
    }

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
        
        if (!res.ok) {
            card.innerHTML = "<p>Pokémon no encontrado</p>";
            return;
        }

        const data = await res.json();

        const tipos = data.types.map(t => t.type.name).join(", ");

        card.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}">
            <p><strong>Tipos:</strong> ${tipos}</p>
        `;

    } catch (error) {
        card.innerHTML = "<p>Error al cargar datos</p>";
    }
}