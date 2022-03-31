//se define una instancia de Apollo Server y se activa el servido
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require("./utils/authentication");
const AuthAPI = require("./dataSources/authAPI");
const DonacionAPI = require("./dataSources/donacionesAPI");
const GatosAPI = require("./dataSources/gatosAPI");
const ReservasAPI = require("./dataSources/reservasAPI");

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
      authAPI: new AuthAPI(),
      donacionesAPI: new DonacionAPI(),
      gatosAPI: new GatosAPI(),
      reservasAPI: new ReservasAPI(),
    }),
    introspection: true,
    playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});