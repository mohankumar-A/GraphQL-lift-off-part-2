// const fetch = require('node-fetch');

// using fetch instead of dataSources
// const resolvers = {
//   Query: {
//     tracksForHome: async () => {
//       const baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com';
//       const res = await fetch(`${baseUrl}/tracks`);
//       return res.json();
//     },
//   },
//   Track: {
//     author: async ({ authorId }, _, { dataSources }) => {
//       const baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com';
//       const res = await fetch(`${baseUrl}/author/${authorId}`);
//       return res.json();
//     },
//   },
// };

// using datasources
const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthors(authorId);
    }
  }
};

module.exports = resolvers;