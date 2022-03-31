// permite unir todos los resolvers en un único resolver
const authResolvers = require("./authResolver");
const donacionesResolvers = require("./donacionesResolver");
const gatosResolvers = require("./gatosResolver");
const planResolvers = require("./planResolver");
const reservaResolvers = require("./reservaResolver");
const lodash = require("lodash");

const resolvers = lodash.merge(
  authResolvers,
  donacionesResolvers,
  gatosResolvers,
  planResolvers,
  reservaResolvers
);
module.exports = resolvers;