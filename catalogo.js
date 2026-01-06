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
}function abrirCotizacion() {
    document.getElementById("modalCotiza").style.display = "flex";
}

function cerrarCotizacion() {
    document.getElementById("modalCotiza").style.display = "none";
}

function enviarWhatsApp() {
    const nombre = document.getElementById("nombre").value;
    const servicios = [...document.getElementById("servicio").selectedOptions]
        .map(op => op.value)
        .join(", ");
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !servicios) {
        alert("Completa los campos obligatorios");
        return;
    }

    const texto = `Hola, soy ${nombre}.
Me interesa cotizar los siguientes servicios:
${servicios}

Proyecto:
${mensaje}`;

    const url = `https://wa.me/527224556699?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
}



