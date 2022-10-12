
// sSIDE BAR
document.querySelector('.menu_btn').addEventListener('click', () => {
    document.querySelector('.header_nav').classList.toggle('show')
});

// SCROLL REVEAL
ScrollReveal().reveal('.article_inicio');
ScrollReveal().reveal('.article_text', { delay: 200 });
ScrollReveal().reveal('.article_cards', { delay: 200 });
ScrollReveal().reveal('.article_banner', { delay: 200 });

// FORM
document.querySelector('.button_inicio').addEventListener('click', () => {
    document.getElementById('formulario').classList.toggle('show2')
});

// XMARK CLOSE FORM
document.querySelector('.form_head').addEventListener('click', () => {
    document.getElementById('formulario').classList.toggle('show2')
});

// CONECTANDO A BASE DE DATOS

document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));

    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('email').value = '';
            document.getElementById('contrasenia').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });
});