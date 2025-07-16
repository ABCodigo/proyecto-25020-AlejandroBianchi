document.addEventListener('DOMContentLoaded', () => {
    const productosDisponibles = [
        { id: '1', image: 'image/pizzas/fugazza.png', nombre: 'Pizza Fugazza', descripcion:'queso muzzarella, cebolla y oregano.', precio: 20000 },
        { id: '2', image: 'image/pizzas/provollone.png', nombre: 'Pizza Provollone', descripcion:'muzzarella, salsa de tomate, rodajas de queso provollone,  aceitunas negras.', precio: 25000 },
        { id: '3', image: 'image/pizzas/jamoncrudo.png', nombre: 'Pizza Jamon Crudo', descripcion:'muzarella, salsa de tomate, jamon crudo italiano, rucula, parmesano rallado.', precio: 27000.00 },
        { id: '4', image: 'image/pizzas/napolitana.png', nombre: 'Pizza Napolitana', descripcion:'muzzarella, salsa tomate, rodajas de tomate, ajo, perejil.', precio: 22500.00 },
        { id: '5', image: 'image/pizzas/jamoncocido.png', nombre: 'Pizza Jamon Cocido', descripcion:'muzzarella, salsa de tomate, fetas jamon cocido natural, aceitunas verdes.',precio: 21500.00 },
        { id: '6', image: 'image/pizzas/peperoni.png', nombre: 'Pizza Peperoni', descripcion:'muzzarella, salsa tomate,rodajas de salame milanes.', precio: 22500.00 },
        { id: '7', image: 'image/pizzas/muzzarella.png', nombre: 'Pizza Muzzarella', descripcion:'muzzarella, salsa de tomate, oregano, aceitunas verdes.',precio: 19500.00 },
        { id: '8', image: 'image/pizzas/ananaycherry.png', nombre: 'Pizza Anana y cherry', descripcion:'muzzarella, salsa de tomate, mitades de rodajas de anana, tomatitos cherry.', precio: 23000 },
        { id: '9', image: 'image/pizzas/faina.png', nombre: 'Pizza Faina', descripcion:'suave masa de harina de garbanzos.', precio: 14000.00 },
        { id: '10', image: 'image/pizzas/fugazzetarellena.png', nombre: 'Pizza Fugazzeta Rellena', descripcion:'rellena con queso fresco EXTRA y muzzarella, cebollas caramelizadas.', precio: 28000.00 },
        { id: '11', image: 'image/pizzas/palmitoysalsagolf.png', nombre: 'Pizza Palmitos', descripcion:'muzarella, salsa de tomate, rodajas o cubos de palmitos y salsa golf.',precio: 16500.00 },
        { id: '12', image: 'image/pizzas/vegetariana.png', nombre: 'Pizza Vegetariana', descripcion:'muzzarella, salsa tomate, cebolla morada, tomates cherry, hongos, ajo y perejil.', precio: 22700.00 }
    ]; 
    
    const contenedorListaProductos = document.getElementById('contenedorListaProductos')

    function renderizarProductos() {
        // usamos map para transformar cada objeto producto en un string HTML
        const productosHtml = productosDisponibles.map(producto => {
             return `
                    <div class="item-producto" data-aos="zoom-in">
                        <img src="${producto.image}" alt="${producto.nombre}">
                        <div class="producto-descripcion">
                            <h2>${producto.nombre}</h2>                            
                            <h3>Descripcion: ${producto.descripcion}</h3>
                            <h4>Precio: $ ${producto.precio}.-</h4>  
                        </div>                 
                        <button class="fa-solid fa-cart-shopping" class="btn-agregar-carrito" id="btn-agregar-${producto.id}"></button> 
                    </div>                                   
                    `;      

        });

        // unimos todos los strings HTML y los insertamos en el contenedor
        contenedorListaProductos.innerHTML = productosHtml.join('')

        // Una vez que el HTML está en el DOM,podemos seleccionar los botones y adjuntarles los eventos
        adjuntarEventosAgregarCarrito();
    }

    function adjuntarEventosAgregarCarrito() {
        // recorremos el array original de productos para adjuntar eventos
        // usamos el ID del producto para encontrar el botón correspondiente
        productosDisponibles.forEach(producto => {
            const boton = document.getElementById(`btn-agregar-${producto.id}`)
            if (boton) { // asegurarse que el boton exista
                boton.addEventListener('click', () => {
                    // cuando hace click,ya tenemos acceso al objeto 'producto' original
                    agregarProductoAlCarrito(producto);
                })
            }
        })
    }

    function agregarProductoAlCarrito(productoAAgregar) {
        let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

        const indiceProductoExistente = carrito.findIndex(item => item.id === productoAAgregar.id);

        if (indiceProductoExistente !== -1) {
            carrito[indiceProductoExistente].cantidad++;
        } else {
            carrito.push({
                id: productoAAgregar.id,
                image: productoAAgregar.image,
                nombre: productoAAgregar.nombre,
                precio: productoAAgregar.precio,
                cantidad: 1
            });
        }

        localStorage.setItem('carritoDeCompras',JSON.stringify(carrito));
        alert(`${productoAAgregar.nombre} agregado al carrito!`);

    }

    renderizarProductos()

})