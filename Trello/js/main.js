var inicio = document.getElementById('inicio');
var lista = document.getElementById('lista');
var btnPrincipal = document.getElementById('btnPrincipal');
// VARIABLES CREADAS
var divLista = document.createElement('div');
var tituloLista = document.createElement('input');
var btnFormulario = document.createElement('button');
var tache = document.createElement('span');
btnPrincipal.addEventListener('click', desplegar);
// FUNCIONES
function desplegar(){
	inicio.replaceChild(divLista, btnPrincipal);
	divLista.setAttribute('class','fnd-2 mar-3');
	divLista.appendChild(tituloLista);
	tituloLista.setAttribute('placeholder', 'Añadir una lista');
	tituloLista.className = 'tamano2';
	divLista.appendChild(btnFormulario);
	divLista.appendChild(tache);
	tache.setAttribute('class','glyphicon glyphicon-remove');
	btnFormulario.innerHTML = 'Guardar';
	btnFormulario.setAttribute('class','btn btn-primary btn-xs');
	btnFormulario.addEventListener('click', guardar);
	tache.onclick = function cierre(){
		inicio.replaceChild(btnPrincipal, divLista);
	}
}
function guardar(){
	if(tituloLista.value === ''){
		tituloLista.setAttribute('placeholder', 'Ingresa un titulo');
		return false;
	}
	inicio.replaceChild(btnPrincipal, divLista);
	var divGuardar = document.createElement('div');
	var contenidoTarjeta = document.createElement('input');
	var tituloTareas = document.createElement('h3');	
	lista.appendChild(divGuardar);
	divGuardar.setAttribute('class', 'fnd-1 col-xs-2');
	tituloTareas.innerHTML = tituloLista.value;
	divGuardar.appendChild(tituloTareas);
	divGuardar.appendChild(contenidoTarjeta);
	contenidoTarjeta.setAttribute('placeholder', 'Añadir una tarjeta');
	contenidoTarjeta.className = 'tamano1';
	contenidoTarjeta.onclick = function tarjetas(){
		var btnTarjeta = document.createElement('button');
		var divTarjeta = document.createElement('div');
		var textoTarjeta = document.createElement('textarea');
		textoTarjeta.className = 'tamano3';
		divGuardar.replaceChild(textoTarjeta,contenidoTarjeta);
		divGuardar.appendChild(textoTarjeta);
		divGuardar.appendChild(btnTarjeta);
		btnTarjeta.setAttribute('class','btn btn-primary btn-xs');
		btnTarjeta.appendChild(document.createTextNode('Aceptar'));
		btnTarjeta.onclick = function guardarTarjeta(){
			if(textoTarjeta.value === ''){
				textoTarjeta.setAttribute('placeholder', 'Escribe tu texto aquí');
				return false;
			}
			var tareas = document.createElement('div');
			var contenidoTexto = document.createElement('p');
			var insertedElement = divGuardar.insertBefore(tareas, textoTarjeta); //Para insertar elementos antes de textoTarjeta
			contenidoTexto.innerHTML = textoTarjeta.value;
			tareas.appendChild(contenidoTexto);
			textoTarjeta.value = '';
		}
	}
	tituloLista.value = '';	
}