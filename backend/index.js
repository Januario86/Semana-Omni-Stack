const express = require('express');

const app = express();

app.use(express.json());

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
  * Request Body:Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */
 /**
  * SQL:MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
  * NOSQL:MongoDB,CouchDB,etc
  */
app.post('/users',(request,response) =>{

    const body= request.body;

    console.log(body);

    return response.json({
        evento:"Semana OmniStack 11.0",
        aluno:'Felipe Teste'
    })
});

app.listen(3333);