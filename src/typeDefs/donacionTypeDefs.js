//representa los procesos necesarios para realizar una donacion
const { gql } = require("apollo-server");

const donacionTypes = gql`
    type Donacion{
        id_donation: Int!
        email: String!
        cardNumber: Int!
        nameOnCard: String
        amount: Int!
        city: String!
    }

    type DonacionDetail{
        id_donation: Int!
        email: String!
        amount: Int!
        city: String!
    }

    input DonacionInput{
        email: String!
        cardNumber: Int!
        nameOnCard: String
        amount: Int!
        city: String!
    }

    type Query{
        getDonation(donacionId: Int!): DonacionDetail!
        getDonations: [DonacionDetail!]
        getDonationByUserEmail(email: String!): [DonacionDetail!]
        getDonationByCity(city: String!): [DonacionDetail!]
    }

    type Mutation {
        createDonation(donacion: DonacionInput): Donacion!
    }
`;

module.exports = donacionTypes;