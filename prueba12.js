let pokemons = [];
let inicio = 0;
const cantidad = 3;

window.onload = async function () {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemons.push({
            id: data.id,
            nombre: data.name,
            img: data.sprites.front_default
        });
    }
    mostrarPokemons();
};

function mostrarPokemons() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const grupo = pokemons.slice(inicio, inicio + cantidad);

    grupo.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <h3>${p.nombre.toUpperCase()}</h3>
                <p>ID: ${p.id}</p>
            </div>
        `;
    });
}

function mostrarSiguiente() {
    if (inicio + cantidad < pokemons.length) {
        inicio += cantidad;
        mostrarPokemons();
    }
}

function mostrarAnterior() {
    if (inicio - cantidad >= 0) {
        inicio -= cantidad;
        mostrarPokemons();
    }
}
