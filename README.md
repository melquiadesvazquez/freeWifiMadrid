# Free Wifi Madrid [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Nodejs library to find free Wi-Fi hotspots around a location in Madrid

## Installation

```sh
$ npm install --save freewifimadrid
```

## Usage

```js
const freeWifiMadrid = require('freewifimadrid');

freeWifiMadrid({
  'lat': 40.4164154, // latitude
  'lng': -3.7043029, // longitude
  'dst': 1000 // distance in metres
}).then((resp) => {
  console.log(resp);
});
```

## License

MIT © [Melquiades Vazquez](https://github.com/melquiadesvazquez)

[npm-image]: https://badge.fury.io/js/emtmadrid-lib.svg
[npm-url]: https://npmjs.org/package/emtmadrid-lib
[travis-image]: https://travis-ci.org/melquiadesvazquez/freeWifiMadrid.svg?branch=master
[travis-url]: https://travis-ci.org/melquiadesvazquez/freeWifiMadrid
[daviddm-image]: https://david-dm.org/melquiadesvazquez/freeWifiMadrid.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/melquiadesvazquez/freeWifiMadrid