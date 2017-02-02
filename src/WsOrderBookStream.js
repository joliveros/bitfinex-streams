import Websocket from 'ws';
import { Readable } from 'stream';

const debug = require('debug')('bitfinex:orderbook');

export default function WsOrderBookStream(CurrencyPair = 'tBTCUSD') {
  const orderBookStream = new Readable();
  let bfxWebsocket;
  const readOrderBook = data => orderBookStream.push(JSON.stringify(data));

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;

      bfxWebsocket = new Websocket('wss://api.bitfinex.com/ws/v2');

      bfxWebsocket.on('open', () => {
        const subscribeOptions = {
          channel: 'book',
          event: 'subscribe',
          freq: 'F0',
          prec: 'P3',
          len: 100,
          symbol: CurrencyPair,
        };

        bfxWebsocket.send(JSON.stringify(subscribeOptions));

        bfxWebsocket.on('message', readOrderBook);
        bfxWebsocket.on('message', (data) => debug(data));
        bfxWebsocket.on('error', (err) => {
          throw err;
        });
      });
    }
  };

  return orderBookStream;
}
