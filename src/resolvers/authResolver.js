//encargado de determinar cómo resolver o procesar una operación
//reciben como parametros los datos definidos en los typeDefs y un objeto datasource que permite acceder a los microservicios 
const userResolver = {
    Query: {//procesa las peticiones
        userDetailById: async (_, { userId }, { dataSources, userIdToken }) => {//el userIdToken solo lo reciben las funciones que requieren autenticacion
            if (userId == userIdToken)
                return await dataSources.authAPI.getUser(userId);
            //Conectar al servicion web
            else return null;
        },
    },

    Mutation: { //procesa las mutaciones
        singUpUser: async (_, { userInput }, { dataSources }) => {
            return await dataSources.authAPI.createUser(userInput);
        },

        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: async (_, { token }, { dataSources }) =>
            dataSources.authAPI.refreshToken(token),
        updateUser: async (_, { user }, { dataSources, userIdToken }) => {
            if (user.id == userIdToken) //si el id del usuario actualizado es igual al token del usuario deja actualizar
                return await dataSources.authAPI.updateUser(user);
            else return null;
        },

        deleteUser: async (_, { userId }, { dataSources, userIdToken }) => {
            if (user.id == userIdToken) //si el id del usuario es igual al token del usuario deja eliminar
                return await dataSources.authAPI.deleteUser(userId);
            else return null;
        },
    },
};
module.exports = userResolver;