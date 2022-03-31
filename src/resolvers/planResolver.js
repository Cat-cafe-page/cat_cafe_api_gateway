//reciben como parametros los datos definidos en los typeDefs y un objeto datasource que permite acceder a los microservicios 
const planResolver = {
    Query: {//procesa las peticiones
        getPlan: async (_, { planId }, { dataSources }) => {
            return await dataSources.reservasAPI.getPlanById(planId);
        },

        getAllPlans: async (_, {}, { dataSources }) => {
            return await dataSources.reservasAPI.getAllPlans();
        },

        getPlansByTime: async (_, {jornada}, { dataSources }) => {
            return await dataSources.reservasAPI.getAllPlansByDaytime(jornada);
        },

        getPlansByDuration: async (_, {duracion}, { dataSources }) => {
            return await dataSources.reservasAPI.getAllPlansByDuration(duracion);
        },

        getPlansByPrice: async (_, {precio}, { dataSources }) => {
            return await dataSources.reservasAPI.getAllPlansByPrice(precio);
        },
    },

    Mutation: {
        createPlan: async (_, { plan }, { dataSources }) => {
            return await dataSources.reservasAPI.createPlan(plan);
        },

        updatePlan: async (_, { planId, plan }, { dataSources }) => {
            return await dataSources.reservasAPI.updatePlan(planId, plan);
        },

        deletePlan: async (_, { planId }, { dataSources }) => {
            return await dataSources.reservasAPI.deletePlan(planId);
        },
    },
};
module.exports = planResolver;