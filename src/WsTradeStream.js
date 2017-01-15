import BitfinexApi from 'bitfinex-api-node';
import { Readable } from 'stream';

const {
  BFX_API_KEY = '',
  BFX_API_SECRET = '',
} = process.env;

export default function WsTradeStream(CurrencyPair = 'BTCUSD') {
  const tradeStream = new Readable();
  let bfxWebsocket;
  const readOrderBook = data => tradeStream.push(JSON.stringify(data));

  tradeStream._read = () => {
    if (!tradeStream.started) {
      tradeStream.started = true;

      bfxWebsocket = new BitfinexApi(BFX_API_KEY, BFX_API_SECRET, 2).ws;

      bfxWebsocket.on('open', () => {
        bfxWebsocket.subscribeTrades(CurrencyPair);

        bfxWebsocket.on('orderbook', readOrderBook);
        bfxWebsocket.on('error', (err) => {
          throw err;
        });
      });
    }
  };

  return tradeStream;
}
