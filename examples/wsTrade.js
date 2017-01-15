import WsTradeStream from '../src/WsTradeStream';

const orderBookStream = new WsTradeStream();

orderBookStream.pipe(process.stdout);
