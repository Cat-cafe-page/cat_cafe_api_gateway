//reciben como parametros los datos definidos en los typeDefs y un objeto datasource que permite acceder a los microservicios 
const donacionResolver = {
    Query: {//procesa las peticiones
        getDonation: async (_, { donacionId }, { dataSources }) => {
            return await dataSources.donacionesAPI.getDonationById(donacionId);
        },

        getDonations: async (_, {}, { dataSources }) => {
            return await dataSources.donacionesAPI.getAllDonations();
        },

        getDonationByUserEmail: async (_, { email }, { dataSources }) => {
            return await dataSources.donacionesAPI.getDonationsByEmail(email);
        },

        getDonationByCity: async (_, { city }, { dataSources }) => {
            return await dataSources.donacionesAPI.getDonationsByCity(city);
        },
    },

    Mutation: {
        createDonation: async (_, { donacion }, { dataSources }) => {
            return await dataSources.donacionesAPI.createDonation(donacion);
        },
    },
};
module.exports = donacionResolver;