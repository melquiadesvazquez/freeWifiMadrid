'use strict';

const fetch = require('node-fetch');

module.exports = async (options = {}) => {
  // Open data from Madrid City Council https://datos.madrid.es/portal/site/egob
  const url = 'https://datos.madrid.es/egob/catalogo/216619-0-wifi-municipal.json?';

  // Default location set to 1km around Sol
  const defaultOptions = {
    'latitud': options.lat || 40.4164154,
    'longitud': options.lng || -3.7043029,
    'distancia': options.dst || 1000
  };

  // Merge parameters received with default parameters
  const params = Object.entries(defaultOptions).map(([key, value]) => key + '=' + value).join('&');
  let result = [];

  try {
    // Await for response
    const response = await fetch(url + params);

    // Parse the respose in json
    const json = await response.json();

    // Map the json into an object with {name, lat, lng}
    result = json['@graph'].map(({title, location}) => ({name: title, lat: location.latitude, lng: location.longitude}));
  }
  catch(err) {
    console.log(err);
  }

  return result;
};
