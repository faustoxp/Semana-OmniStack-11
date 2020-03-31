const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333)


/*
Conceito de Rota / recurso
 */

/* métodos HTTP:
GET: buscar/listar uma informação do back end
POST: criar uma informação no back end
PUT: alterar uma informação no back end
DELETE: deletar uma informação no back-end
 */

 /** Tipos de parâmetros
  * Query params: parâmetros nomeados na rota após o simbolo "?" (Filtros, paginação)
  * Route params: parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição; utilizado para criar ou alterar recursos
  */

/** Bancos de dados: SQL
  * MySQL,SQlite, Postgree, Oracle etc
  * NoSQL: MongoDB, CouchDB etc
  */

/** Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

 


app.listen(3333)