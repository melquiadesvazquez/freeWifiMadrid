'use strict';

const freeWifiMadrid = require('./');

freeWifiMadrid({
  'lat': 40.4164154, // latitude
  'lng': -3.7043029, // longitude
  'dst': 1000 // distance in metres
}).then((resp) => {
  console.log(resp);
});
