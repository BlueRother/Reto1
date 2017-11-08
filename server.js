// VARIABLES

var titulo = "Victor y sus amigos";

var persona = {
	nombres: "Victor Hipolito	",
	apellidos: "Garcia Carranza",
	edad: "24",
  imagen: 'Asset 5.png'
};

var amigos = [
	{
		nombres: "Eduardo Carlos",
		apellidos: "Muro Vargas",
		edad: "25",
    imagen: 'Asset 4.png'
	},
	{
		nombres: "Boris Frank",
		apellidos: "Cabrejos Céspedes",
		edad: "25",
    imagen: 'Asset 2.png'
	},
	{
		nombres: "Jean Carlos",
		apellidos: "Llanos Castillo",
		edad: "23",
    imagen: 'Asset 3.png'
	},
	{
		nombres: "Juan Leonardo",
		apellidos: "Salazar Gonzales",
		edad: "23",
    imagen: 'Asset 1.png'
	},
];

'use strict'

// REQUERIMIENTO DE MODULOS

var express =  require('express');
var swig = require('swig');

//CONFIGURACIONES

// Creación del servidor web con express
var server = express();

// Integracion del motor de templates swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

// Seteo de dirección de carpeta de archivos estaticos
server.use(express.static(__dirname + '/public'));

// PETICIONES

// Cuando exista una petición en el servidor
server.get('/',function(req,res){
	res.render('amigos.html', {titulo:titulo,persona:persona,amigos:amigos});
});

// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('El servidor esta escuchando en el puerto '+ 8000)
});
