bitfinex-streams
===========

[![Build Status](https://travis-ci.org/joliveros/bitfinex-streams.svg?branch=master)](https://travis-ci.org/joliveros/bitfinex-streams)
[![npm version](https://badge.fury.io/js/bitfinex-streams.svg)](http://badge.fury.io/js/bitfinex-streams)

Stream bitfinex websocket api data


Install
-------

### Node.js

```shell
npm install --save-dev bitfinex-streams
```


### Usage

```javascript
const bitfinexStreams = require('bitfinex-streams');
const { OrderBookStream } = bitfinexStreams;

const orderBookStream = new OrderBookStream();

orderBookStream.pipe(...);
```

License
-------

[MIT](https://github.com/joliveros/bitfinex-streams/blob/master/LICENSE) (c) [joliveros](https://github.com/joliveros)
