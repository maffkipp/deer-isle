// Connection to Contentful DB
const contentful = require('contentful');
const client = contentful.createClient({
  space: 'stclq90vr0rt',
  accessToken: '46620efa6dbfe727d2d1cb519f4911a445ef12c703bc03a757f2a69c197e9396'
});

export default client;