import BitfinexApi from 'bitfinex-api-node';
import { Readable } from 'stream';

const {
  BFX_API_KEY = '',
  BFX_API_SECRET = '',
} = process.env;

export default function WsOrderBookStream(CurrencyPair = 'BTCUSD') {
  const orderBookStream = new Readable();
  let bfxWebsocket;
  const readOrderBook = data => orderBookStream.push(JSON.stringify(data));

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;

      bfxWebsocket = new BitfinexApi(BFX_API_KEY, BFX_API_SECRET, 2).ws;

      bfxWebsocket.on('open', () => {
        bfxWebsocket.subscribeOrderBook(CurrencyPair);

        bfxWebsocket.on('orderbook', readOrderBook);
        bfxWebsocket.on('error', (err) => {
          throw err;
        });
      });
    }
  };

  return orderBookStream;
}
