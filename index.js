const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const celularInput = document.getElementById('celular');
const paisInput = document.getElementById('pais')
const registrarButton = document.getElementById('registrar');
    
registrarButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    //Verificamos que todos los campos han sido rellenados
    if (!nombreInput.value || !correoInput.value || !celularInput.value || !paisInput.value) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    //Verificamos que nombre solo contenga letras
    const nombrePattern = /^[A-Za-z]+$/;
    if (!nombrePattern.test(nombreInput.value)) {
        alert('El campo de nombre solo debe contener letras.');
        return;
    }

    //Verificamos que ingresen un correo valido
    const correoPattern = /\S+@\S+\.\S+/;
    if (!correoPattern.test(correoInput.value)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    //verificamos que pais solo contenga numeros
    const paisPattern = /^\d+$/;
    if (!paisPattern.test(paisInput.value)) {
        alert('El campo de numero de pais solo debe contener números.');
        return;
    }

    //Verificamos que celular y pais solo tenga numeros
    const celularPattern = /^\d+$/;
    if (!celularPattern.test(celularInput.value)) {
        alert('El campo de celular solo debe contener números.');
        return;
    }

    
    

});