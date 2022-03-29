//Call all typeDefs
const authTypes = require("./authTypeDefs");
const donacionTypes = require("./donacionTypeDefs");
const gatosTypes = require("./gatosTypeDefs");
const planTypes = require("./planTypeDefs");
const reservaTypes = require("./reservaTypeDefs");

const schemaArrays = [authTypes, donacionTypes, gatosTypes, planTypes, reservaTypes];

module.exports = schemaArrays;