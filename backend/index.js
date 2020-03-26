const express = require('express');

const app = express();

/*
Rotas / Recurso 
*/
/**
 * Método HTTP:
 * 
 * GET:  buscar um informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */
app.post('/users',(request,response) =>{

    return response.json({
        evento:"Semana OmniStack 11.0",
        aluno:'Felipe Januário'
    })
});

app.listen(3333);