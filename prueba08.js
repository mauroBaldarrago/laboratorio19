async function cargarPokemones() {
    const contenedor = document.getElementById("contenedor");
    let html = "";

    for (let i = 1; i <= 10; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();

        html += `
            <div class="card">
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}" alt="pokemon">
                <p><strong>ID:</strong> ${data.id}</p>
            </div>
        `;
    }

    contenedor.innerHTML = html;
}

cargarPokemones();
