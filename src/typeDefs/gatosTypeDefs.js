//representa los procesos necesarios registrar y ver los gatos
const { gql } = require("apollo-server");

const gatosTypes = gql`
    type Gatos{
        id: String!
        nombre: String!
        edad: Int
        añoAdopcion: String!
        descripcion: String!
        url: String!
    }

    input GatoInput{
        nombre: String!
        edad: Int
        añoAdopcion: String!
        descripcion: String!
        url: String!
    }

    input GatoUpdate{
        nombre: String!
        edad: Int
        añoAdopcion: String!
        descripcion: String!
        url: String!
    }

    type Query {
        getGatoById(gatoId: String!): Gatos!
        getAllGatos: [Gatos!]
        getGatosByYearAdoption(añoAdopcion: String!): [Gatos!]
    }

    type Mutation {
        createGato(gato: GatoInput!): Gatos!
        updateGato(gato: GatoUpdate, gatoId: String!): Gatos!
        deleteGato(gatoId: String!): String!
    }
`;
module.exports = gatosTypes;