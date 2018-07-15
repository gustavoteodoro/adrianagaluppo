import { space, accessToken } from '../utils/consts/contentfulKeys';
const contentful = require('contentful');

const client = contentful.createClient({
  space,
  accessToken,
})

export const getEntries = () => client.getEntries();