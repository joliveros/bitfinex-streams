import WsOrderBookStream from '../src/wsOrderBookStream';

const orderBookStream = new WsOrderBookStream();

orderBookStream.pipe(process.stdout);

orderBookStream.on('data', (data) => {
  const _data = JSON.parse(data);
  
  const now = (new Date()).getTime() / 1000;

  console.log(Math.round((now - _data.timestamp) * 1000))
});
