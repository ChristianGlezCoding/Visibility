function dibujarConexiones() {
    // 1. Obtener la posición del contenedor principal
    const container = document.getElementById('conexion-container').getBoundingClientRect();
    
    // Función de ayuda para calcular el punto central de un elemento relativo al contenedor
    const getCenter = (id) => {
        const el = document.getElementById(id).getBoundingClientRect();
        return {
            x: el.left - container.left + el.width / 2,
            y: el.top - container.top + el.height / 2
        };
    };

    try {
        // 2. Obtener las coordenadas centrales de cada imagen
        const p1 = getCenter('img-creativos'); // Punto 1
        const p2 = getCenter('img-digitales');  // Punto 2
        const p3 = getCenter('img-tecnologicos'); // Punto 3

        // 3. Dibujar UNA sola línea continua que pase por los 3 puntos
        const pathUnico = document.getElementById('linea-unica');
        
        // Mueve a P1, Linea a P2, Linea a P3
        const d = `M ${p1.x} ${p1.y} 
                   L ${p2.x} ${p2.y}
                   L ${p3.x} ${p3.y}`;          
                   
        pathUnico.setAttribute('d', d);

    } catch (e) {
        console.error("Error al dibujar las líneas. Asegúrate de que los IDs existan y las imágenes carguen.", e);
    }
}

// Ejecutar la función solo cuando toda la ventana (incluidas imágenes y recursos) ha cargado
window.onload = function() {
    setTimeout(dibujarConexiones, 100); 
};

// Vuelve a calcular las líneas si el usuario redimensiona la ventana
window.addEventListener('resize', () => setTimeout(dibujarConexiones, 100));
