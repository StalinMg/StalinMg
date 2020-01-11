const express =require('express');
const bodyParser =require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');

const PORT= 3000;
const endPoint = 'pizza_api'
const schema = {};

let server = express();

server.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}))

server.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint,
}));

server.listen(PORT,() =>{
    console.log('GraphQL API listen in http://localhost:'+PORT + '/endPoint');
    console.log('GraphiQL listen in http://localhost:' +PORT + '/graphoql');
})
console.log("Hola mundo Cruel, el de tu ñaña")