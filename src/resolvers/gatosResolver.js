//reciben como parametros los datos definidos en los typeDefs y un objeto datasource que permite acceder a los microservicios 
const gatosResolver = {
    Query: {//procesa las peticiones
        getGatoById: async (_, { gatoId }, { dataSources }) => {
            return await dataSources.gatosAPI.getGatoById(gatoId);
        },
        
        getGatos: async (_, {}, { dataSources }) => {
            return await dataSources.gatosAPI.getAllGatos();
        },

        getGatosByYearAdoption: async (_, {añoAdopcion}, { dataSources }) => {
            return await dataSources.gatosAPI.getGatoByAdoptionYear(añoAdopcion);
        },
    },

    Mutation: {
        createGato: async (_, { gato }, { dataSources}) => {
            return await dataSources.gatosAPI.createGato(gato);
        },

        updateGato: async (_, { gato, gatoId }, { dataSources }) => {
            return await dataSources.gatosAPI.updateGato(gato, gatoId);
        },

        deleteGato: async (_, { gatoId }, { dataSources }) => {
            return await dataSources.gatosAPI.deleteGato(gatoId);
        },
    },
};
module.exports = gatosResolver;