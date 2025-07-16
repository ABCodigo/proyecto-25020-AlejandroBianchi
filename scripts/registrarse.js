document.addEventListener('DOMContentLoaded', function () {
    const formularioRegistro = document.getElementById('formularioRegistro');
    const user = document.getElementById('user');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const birthday = document.getElementById('birthday');
    const gender = document.getElementById('gender');
    const cphone = document.getElementById('cphone');
    const phone = document.getElementById('phone');
    const tuCorreo = document.getElementById('tuCorreo');
    const pass = document.getElementById('pass');
    const state = document.getElementById('state');
    const town = document.getElementById('town');
    const neigbordhood = document.getElementById('neigbordhood');
    const street = document.getElementById('street');
    const blocknumber = document.getElementById('blocknumber');
    const floor = document.getElementById('floor');
    const department = document.getElementById('department');
    const zipcode = document.getElementById('zipcode');
    

    // Función para manejar la visibilidad y el texto de error
    const mostrarEstadoCampo = (elementoInput, esValido, mensaje = '') => {
        const divPadre = elementoInput.parentNode;
        const textoError = divPadre.querySelector('.texto-error');

        if (esValido) {
            divPadre.classList.remove('error');
            textoError.innerText = '';
        } else {
            divPadre.classList.add('error');
            textoError.innerText = mensaje;
        }
    };
    // mostrarEstadoCampo(asunto,false,'mensaje a agregar')

    // Función para validar el formato de correo electrónico
    const esCorreoValido = (correo) => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };
    // console.log(esCorreoValido('miguel@miguel.com'))

    // Función para validar un campo individual
    const validarCampo = (campo, mensajeVacio, mensajeInvalido = '') => {
        const valor = campo.value.trim();
        if (valor === '') {
            mostrarEstadoCampo(campo, false, mensajeVacio);
            return false;
        } else if (campo.id === 'tuCorreo' && !esCorreoValido(valor)) { //si correo tiene formato valido, lo niega (!) osea true pasa a false 
            mostrarEstadoCampo(campo, false, mensajeInvalido);          // entonces la condicion no se cumple && y pasa al else.
            return false;
        } else {
            mostrarEstadoCampo(campo, true);
            return true;
        }
    };
    // validarCampo(tuNombre, 'Por favor, ingresa tu nombre.')

    // Agrega el evento 'change' a tuCorreo
    tuCorreo.addEventListener('change', () => {
        validarCampo(tuCorreo, 'El correo electrónico es obligatorio', 'Ingresa un correo electrónico válido.');
    });

   
    // agrega el evento 'change' a todos los campos
    [user, name, surname, birthday, gender, /*cphone,*/ phone, tuCorreo, pass, state, town, neigbordhood, street, blocknumber, floor, department, zipcode].forEach(campo => {
        campo.addEventListener('change', () => {
            if (campo.id === 'user') {
                validarCampo(user, 'Ingrese usuario.');
            } else if (campo.id === 'name') {
                validarCampo(name, 'Ingrese nombre.');
            } else if (campo.id === 'surname') {
                validarCampo(surname, 'Ingrse apellido.');   
            } else if (campo.id === 'birthday') {
                validarCampo(birthday, 'Ingrese natalicio.');
            } else if (campo.id === 'gender') {
                validarCampo(gender, 'Ingresa su genero.');
            } else if (campo.id === 'cphone') {
                validarCampo(cphone, 'Ingresa codigo area.');
            } else if (campo.id === 'phone') {
                validarCampo(phone, 'Ingrese su N° celular.');
            } else if (campo.id === 'tuCorreo') {
                validarCampo(tuCorreo, 'Email obligatorio.', 'Ingrese Email valido.');
            } else if (campo.id === 'pass') {
                validarCampo(pass, 'Ingrese contraseña.');
            } else if (campo.id === 'state') {
                validarCampo(state, 'Ingrese provincia.');            
            } else if (campo.id === 'town') {
                validarCampo(town, 'Ingrese localidad.');
            } else if (campo.id === 'neigbordhood') {
                validarCampo(neigbordhood, 'Ingrese el barrio.');
            } else if (campo.id === 'street') {
                validarCampo(street, 'Ingrese la calle.');
            } else if (campo.id === 'blocknumber') {
                validarCampo(blocknumber, 'Ingrese la altura.');
            } else if (campo.id === 'floor') {
                validarCampo(floor, 'Piso ?');
            } else if (campo.id === 'department') {
                validarCampo(department, 'Dpto ?');
            } else if (campo.id === 'zipcode') {
                validarCampo(zipcode, 'Ingresa C. postal.');
            }
        });

    });

    // Escuchador de evento 'submit' del formulario
    formularioRegistro.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Evita el envío del formulario por defecto

        // Define los campos que necesitas validar en un array
        const camposAValidar = [
            { elemento: user, mensajeVacio: 'Obligatorio'},
            { elemento: name, mensajeVacio: 'Obligatorio'},
            { elemento: surname, mensajeVacio: 'Obligatorio'},
            { elemento: birthday, mensajeVacio: 'Obligatorio'},
            { elemento: gender, mensajeVacio: 'Obligatorio'},
            //{ elemento: cphone, mensajeVacio: 'Ingresa codigo de area.' },
            { elemento: phone, mensajeVacio: 'Obligatorio'},
            { elemento: tuCorreo, mensajeVacio: 'Obligatorio', mensajeInvalido: 'Ingrese Email valido.'},
            { elemento: pass, mensajeVacio: 'Obligatorio'},
            { elemento: state, mensajeVacio: 'Obligatorio'},
            { elemento: town, mensajeVacio: 'Obligatorio'},
            { elemento: neigbordhood, mensajeVacio: 'Obligatorio'},
            { elemento: street, mensajeVacio: 'Obligatorio'},
            { elemento: blocknumber, mensajeVacio: 'Obligatorio'},
            { elemento: floor, mensajeVacio: ''},
            { elemento: department, mensajeVacio: 'Obligatorio'},
            { elemento: zipcode, mensajeVacio: 'Obligatorio'}
        ];

        let formularioEsValido = true; // Asumimos que es válido al principio

        // Itera sobre cada campo y ejecuta la validación
        // Si 'validarCampo' retorna false, significa que hay un error y actualizamos formularioEsValido
        camposAValidar.forEach(campoInfo => {
            // La función validarCampo se encarga de mostrar/ocultar el error.
            // Si esCampoValido es falso, significa que hubo un error en ese campo.
            const esCampoValido = validarCampo(campoInfo.elemento, campoInfo.mensajeVacio, campoInfo.mensajeInvalido);
            if (!esCampoValido) {
                formularioEsValido = false; // Marcamos el formulario como inválido si al menos un campo falla
            }
        });

        if (formularioEsValido) {
            console.log('¡Formulario enviado con éxito!');
            // Aquí puedes añadir la lógica para enviar el formulario (por ejemplo, con fetch API)
            formularioRegistro.reset(); // Resetea el formulario
        } else {
            console.log('El formulario no es válido. Por favor, revisa los campos.');
        }
    });

});

