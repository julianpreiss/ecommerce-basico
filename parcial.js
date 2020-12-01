'use strict';

/*
 *	PREISS, JULIAN
 */

let aProductos = [
	{
		nombre: 'Libro Soda Stereo - Colección especial',
		imagen: 'soda.jpg',
		descripcion: 'Colección completa de partituras de la banda',
		precio: 1400,
		id: 1,
	},
	{
		nombre: 'Demoliendo Hoteles - Charly García',
		imagen: 'charly.jpg',
		descripcion: 'Lead Sheet de la canción Demoliendo Hoteles',
		precio: 200,
		id: 2,
	},
	{
		nombre: 'Videolección Vino Melón - Wos',
		imagen: 'wos.jpg',
		descripcion: 'Videolección de melodía y acompañamiento para piano',
		precio: 300,
		id: 3,
	},
	{
		nombre: 'Virus "Wadu Wadu" - Lecciones en guitarra',
		imagen: 'virus.jpg',
		descripcion: 'Método musical para aprender guitarra, basado en las canciones del Album Wadu Wadu',
		precio: 400,
		id: 4,
	},
	{
		nombre: 'Técnicas y estilo: León Gieco',
		imagen: 'leongieco.jpg',
		descripcion: 'Libro con material y ejercicios en el estilo de León Gieco',
		precio: 500,
		id: 5,
	},
	{
		nombre: 'Quedandote o Yendote - L.A. Spinetta',
		imagen: 'spinetta.jpg',
		descripcion: 'Partitura para piano de la canción Quedandote o Yendote',
		precio: 600,
		id: 6,
	},
];

const d = document;

//Declaro las variables que utilizaré para el carrito

let carrito = {
	cantidadDeProductos: 0,
	total: 0,
};

let muestradatos = d.querySelector('#minicarrito');


// Declaro las variables para el ingreso de info a través de JS
let main = d.querySelector('main');

let divprincipal = d.createElement('div');
divprincipal.id = "catalogo"
main.appendChild(divprincipal);



//Genero los productos
for (let producto of aProductos) {

	let article = d.createElement('article')
	divprincipal.appendChild(article);

	let h3 = d.createElement('h3');
	h3.innerHTML = producto.nombre;
	article.appendChild(h3);

	let figure = d.createElement('figure');
	article.appendChild(figure);

	let imagen = d.createElement('img');
	imagen.src = producto.imagen;
	imagen.alt = producto.nombre;
	figure.appendChild(imagen);

	//Genero ventana modal de cada producto

	imagen.onclick = Modal;

	function Modal() {
		let div = d.createElement('div');
		div.className = 'modal';
		d.querySelector('body').appendChild(div);
	
		let p = d.createElement('p');
		p.innerHTML = this.alt;
		div.appendChild(p);
	
		let a = d.createElement('a');
		a.href = '#';
		a.innerHTML = 'CERRAR';
		a.onclick = function () {
			this.parentNode.remove();
		}
		div.appendChild(a);
	
		let figure = d.createElement('figure');
		div.appendChild(figure);	
	
		let img = this.cloneNode();
		figure.appendChild(img);
	
		let figcaption = d.createElement('figcaption');
		figcaption.innerHTML = producto.descripcion;

		figure.appendChild(figcaption)

		let button = d.createElement('button');
		button.innerHTML = 'Agregar'
		button.onclick = function () {
				carrito.total = parseInt(carrito.total + producto.precio);
				carrito.cantidadDeProductos ++;
		
		
				muestradatos.firstElementChild.firstElementChild.innerHTML = carrito.cantidadDeProductos;
				muestradatos.firstElementChild.nextElementSibling.firstElementChild.innerHTML = carrito.total;

				//En este caso, por la tematica del ecommerce, genero un cierre de la ventana modal al hacer el click en agregar, ya que es inusual que alguien compre mas de una unidad del mismo producto.
				this.parentNode.remove();
	
			}
	
			div.appendChild(button);
	}


	let span = d.createElement('span');
	span.innerHTML = `Precio : $${producto.precio}`;
	article.appendChild(span);

	let button = d.createElement('button');
	button.innerHTML = 'Agregar'
	button.onclick = function () {

			carrito.total = parseInt(carrito.total + producto.precio);
			carrito.cantidadDeProductos ++;
	
			muestradatos.firstElementChild.firstElementChild.innerHTML = carrito.cantidadDeProductos;
			muestradatos.firstElementChild.nextElementSibling.firstElementChild.innerHTML = carrito.total;
		}

		article.appendChild(button);		
	}	

//Armado de función de ventana modal del carrito

	let minicarrito = d.querySelector('#minicarrito button');

	function ModalCarrito() {
		let div = d.createElement('div');
		div.className = 'modalcarrito';
		d.querySelector('body').appendChild(div);

		let h3 = d.createElement('h3');
		h3.innerHTML = 'Mi Resumen';
		div.appendChild(h3);
	
		let ul = d.createElement('ul');
		div.appendChild(ul);

		let liItems = d.createElement('li');
		liItems.innerHTML = 'Hay ' + carrito.cantidadDeProductos + ' productos en el carrito';
		ul.appendChild(liItems);
		
		
		let liTotal = d.createElement('li');
		liTotal.innerHTML = 'El total a pagar es ' + carrito.total;
		ul.appendChild(liTotal);	
	
		let a = d.createElement('a');
		a.href = '#';
		a.innerHTML = 'X';
		a.onclick = function () {
			this.parentNode.remove();
		}
		div.appendChild(a);

	}

	minicarrito.onclick = ModalCarrito;

