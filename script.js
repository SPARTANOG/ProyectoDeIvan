var indice = document.getElementById('indice');
var titulos = document.querySelectorAll('h2');

titulos.forEach(function(titulo) {
    var enlace = document.createElement('a');
    enlace.textContent = titulo.textContent;
    enlace.href = '#' + titulo.id;
    indice.appendChild(enlace);
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Agrega la clase "oculto" al índice para que desaparezca
        document.getElementById('indice').classList.add('oculto');

        // Espera 0.5 segundos y luego elimina la clase "oculto" para que el índice aparezca nuevamente
        setTimeout(() => {
            document.getElementById('indice').classList.remove('oculto');
        }, 500);
    });
});

