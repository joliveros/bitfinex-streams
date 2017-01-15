import chai, { expect } from 'chai';
import chaiStream from 'chai-stream-es6';
import wsTradeStream from './WsTradeStream';

// chai assertions for streams
chai.use(chaiStream);

describe('wsTradeStream', () => {
  it('should return a valid readable stream', () => {
    expect(wsTradeStream()).to.be.a.ReadableStream;
  });
});
