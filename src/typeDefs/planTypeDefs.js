//representa los procesos necesarios para agendar y ver un plan
const { gql } = require("apollo-server");

const planTypes = gql`
    type Plan{
        id_plan: Int!
        jornada: String!
        nombre_plan: String!
        duracion: Int!
        descripcion: String
        precio: Int!
        url: String
    }

    type PlanDetail{
        id_plan: Int!
        jornada: String!
        nombre_plan: String!
        duracion: Int!
        descripcion: String
        precio: Int!
        url: String
    }

    input PlanInput{
        jornada: String!
        nombre_plan: String!
        duracion: Int!
        descripcion: String
        precio: Int!
        url: String
    }

    input PlanUpdate{
        jornada: String!
        nombre_plan: String!
        duracion: Int!
        descripcion: String!
        precio: Int!
        url: String
    }

    type Query{
        getPlan(planId: Int!): Plan
        getPlans: [Plan!]
        getPlansByTime(jornada: String!): [Plan]
        getPlansByDuration(duracion: Int!): [Plan]
        getPlansByPrice(precio: Int!): [Plan]
    }

    type Mutation {
        createPlan(plan: PlanInput): PlanDetail
        updatePlan(plan: PlanUpdate, planId: Int!): PlanDetail
        deletePlan(planId: Int!): String!
    }
`;

module.exports = planTypes;