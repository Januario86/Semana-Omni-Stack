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

 /**
  * Tipos de parâmetros:
  * 
  * Query:Parâmetros enviados na rota após "?"(Filtros,paginação)
  * Route Params : ParÂmetros utilizados para identificar recursos
  * Request Body:
  * 
  */
app.get('/users',(request,response) =>{

    const params= request.query;

    console.log(params);

    return response.json({
        evento:"Semana OmniStack 11.0",
        aluno:'Felipe Januário'
    })
});

app.listen(3333);