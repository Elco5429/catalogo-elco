function filtrar(categoria) {
    const cards = document.querySelectorAll('.card');
    const principal = document.getElementById('catalogoPrincipal');

    principal.style.display = 'grid';

    cards.forEach(card => {
        if (categoria === 'todos' || card.classList.contains(categoria)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    cerrarDetalles();
}

function abrirDetalle(tipo) {
    document.getElementById('catalogoPrincipal').style.display = 'none';
    cerrarDetalles();
    document.getElementById(`detalle-${tipo}`).style.display = 'block';
}

function volverCatalogo() {
    cerrarDetalles();
    document.getElementById('catalogoPrincipal').style.display = 'grid';
}

function cerrarDetalles() {
    document.querySelectorAll('.detalle-servicio').forEach(sec => {
        sec.style.display = 'none';
    });
}

