async function mostrarStats() {
    const card = document.getElementById("card");
    const valor = document.getElementById("pokeInput").value.trim();

    if (!valor) {
        card.innerHTML = "<p>Ingresa un nombre o ID válido</p>";
        return;
    }

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor.toLowerCase()}`);

        if (!res.ok) {
            card.innerHTML = "<p>Pokémon no encontrado</p>";
            return;
        }

        const data = await res.json();

        const statsHTML = data.stats
            .map(s => `<p><strong>${s.stat.name}:</strong> ${s.base_stat}</p>`)
            .join("");

        card.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}">
            <h3>Estadísticas Base:</h3>
            ${statsHTML}
        `;

    } catch (error) {
        card.innerHTML = "<p>Error al cargar datos</p>";
    }
}
