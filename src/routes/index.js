var express = require('express');
var router = express.Router();
const controller = require('../controller/siteController');

/* GET home page. */
router.get('/',controller.index);

/* Detalle */ 
router.get('/detail/:id', controller.detail);

/* Creación */
router.get('/create', controller.create);

/* Store */
router.post('/create', controller.store)

/* Editar */
router.get('/edit/:id', controller.edit)

/* Update */
router.post('/edit/:id', controller.update)

/* Delete */
router.post('/destroy/:id', controller.destroy)

/* generos*/
router.get('/vistaGeneros/:id',controller.generos)
/* Actores */
router.get('/vistaActores/:id',controller.actores)
/*Nueva Actuacion*/

/**Crear la union de un actor con una pelicula */
router.get('/creacion',controller.creation);
/**Datos de la nueva actuacion */
router.post('/creacion',controller.creationData);


// ---------**** TO BE CONTINUED****---------
module.exports = router;
