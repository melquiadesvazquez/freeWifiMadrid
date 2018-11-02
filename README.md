# Free Wifi Madrid

Nodejs library to find free Wi-Fi hotspots in Madrid

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
