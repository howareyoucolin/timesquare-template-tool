import axios from 'axios';

// const templateApiUrl = process.env.REACT_APP_TEMPLATE_API_URL || throw new Error('REACT_APP_TEMPLATE_API_URL is defined!');
// For the sake of this exam, I will just hardcode the url here:

const templateApiUrl = '/jsons/templates.json';

const templateApi = axios.create({
  baseURL: templateApiUrl,
});

export default templateApi;
