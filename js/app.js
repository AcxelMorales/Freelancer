document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio()
})

const cargarPortafolio = async () => {
    const data = await fetch('datos.json')
    let portafolio = await data.json()

    let html = ''
    portafolio.portafolio.forEach(e => {
        html += `
            <div class="elemento">
                <img src="img/${e.id}.jpg">
                <div class="contenido">
                    <h3>${e.nombre}</h3>
                    <p>${e.desc}</p>
                </div>
            </div>
        `
    })

    document.getElementById('listado').innerHTML = html
}