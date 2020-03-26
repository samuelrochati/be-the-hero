const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 **/

/**
 * Métodos HTTP
 *
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar informação no backend
 * DELETE: Deletar uam informação no backend
 *
 **/

/**
 * Tipos de parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota aós "?" (Diltros, paginação)
 * Route Params: Parâmetros utiizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *
 */

/**
 * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */
