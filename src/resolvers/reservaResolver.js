//reciben como parametros los datos definidos en los typeDefs y un objeto datasource que permite acceder a los microservicios 
const reservaResolver = {
    Query: {//procesa las peticiones
        getReserva: async (_, { idReserva }, { dataSources }) => {
            return await dataSources.reservasAPI.getReservaById(idReserva);
        },

        getReservas: async (_, {}, { dataSources }) => {
            return await dataSources.reservasAPI.getAllReservas();
        },

        getReservasByUser: async (_, { user }, { dataSources }) => {
            return await dataSources.reservasAPI.getAllReservasByUserDocument(user);
        },
    },

    Mutation: {
        createReserva: async (_, { reserva }, { dataSources }) => {
            return await dataSources.reservasAPI.createReserva(reserva);
        },

        updateReserva: async (_, { idReserva, Reserva }, { dataSources }) => {
            return await dataSources.reservasAPI.updateReserva(Reserva, idReserva);
        },

        deleteReserva: async (_, { idReserva }, { dataSources }) => {
            return await dataSources.reservasAPI.deleteReserva(idReserva);
        },
    },
};
module.exports = reservaResolver;