const express = require('express');
const crypto = require('crypto'); // pacote que vem com o NODE para encriptar

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.post('/ongs', OngController.create); 
routes.get('/ongs',  OngController.index); 

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get("/profile", ProfileController.index);

routes.post('/users', (request, response) => {
    const body = request.body; // pega o corpo da requisição (tudo que foi enviado)
    console.log(body);
return response.json({
   body
})
}); 

module.exports = routes; // dessa forma exportamos essa váriável