
document.addEventListener('DOMContentLoaded', () => {
    // selecciona el formulario del dom
    const formulario = document.querySelector('form');

    const mostrarError = (input, mensaje) => {
        //acceder al div contenedor padre
        const divPadre = input.parentNode;
        //console.log(divPadre);
        //encontramos el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        //agregar la clase de error al elemento padre 
        divPadre.classList.add('error');
        //agregamos mensaj de error
        errorText.innerText = mensaje;
    }

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // Eliminar el mensaje de error

    const eliminarError = input => {
        //acceder a la etiqueta contenedora
        const divPadre = input.parentNode;
        //eliminar la clase de error del elemento padre/contenedor
        const errorText = divPadre.querySelector('.error-text');
        //establecemos el texto como vacio
        divPadre.classList.remove('error');
        //encontramos el elemento error-text        
        errorText.innerText = '';
    }

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // Funcion que corrobore que los campos estan completos y asi quitar el error

    formulario.querySelectorAll('input').forEach(input => {
        // se activa cuando el valor de un elemento del formulario cambia y se sale del elemento 
        input.addEventListener('change', () => {
            // obtenemos el valor del campo seleccionado
            const valor = input.value.trim();//elimina cualquier espacio en blanco al principio y al final del valor obtenido.
            // condicion para evaluar
            if (valor !== '') {
                eliminarError(input);
            }
        })
    });

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // Funcion completar campo

    function validarCampo(campoId, mensaje) {

        const campo = document.getElementById(campoId);
        const value = campo.value.trim();

        if (value == '') {
            mostrarError(campo, mensaje);
            return false;//indicamos que la validacion fallo
        } else {
            eliminarError(campo)
            return true;//indicamos que la validacion ha sido exitosa
        }
    }

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // Función para validar un correo electrónico utilizando una expresión regular

    function isEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);//devuelve true si la cadena coincide con el patrón de la expresión regular
    }

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

    function validarEmail(campoId, mensaje) {
        // obtenemos elemento mediante id
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();
        // si el campo esta vacio
        if (email === '') {
            //establecemos mensaje de error
            mostrarError(campo, 'el correo electronico es obligatorio');
            // indicamos que la validacion ha fallado
            return false
        } else if (!isEmail(email)) {//(!isEmail(email)) {//) {// (!email.includes('@')) {    
            mostrarError(campo, mensaje);
            // indicamos que la validacion ha fallado
            return falses
        } else {
            // si es valido eliminamos cualquier error
            eliminarError(campo);
            // indicamos que la validacion es exitosa
            return true
        }
    }

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // funcion para validar el formulario

    const validarFormulario = () => {
        let validar = true;

        // aqui por cada campo que indique rellenar voy a tener que hacer un validar como en el caso de usuario.

        // validar campo usuario
        validar = validarCampo('usuario', 'el USUARIO es obligatorio') && validar;
        // validar campo email
        validar = validarEmail('email', 'el formato del E-MAIL es INVALIDO') && validar;
        // validar contraseña
        validar = validarCampo('password', 'la CONTRASEÑA es obligatoria') && validar;

        return validar;
    }

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    // agregar un evento de escucha para cuando se envia el formulario

    formulario.addEventListener('submit', event => {

        event.preventDefault();
        if (!validarFormulario()) {
            // mensaje no valido
            event.preventDefault()//evita que el formulario se envie
            console.log("El formulario no es valido");
        } else {
            event.preventDefault();
            console.log("El formulario es valido...");
            formulario.reset();
        }
    })

})
