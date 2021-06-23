const contentful = require('contentful')

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE || '18yoosog20ju',
  accessToken: process.env.REACT_APP_ACCESS_TOKEN || '0I3QCVzsfU2UZolz1Fp3xA8LG8w5oyiXkBGHapaR8JI'
});
