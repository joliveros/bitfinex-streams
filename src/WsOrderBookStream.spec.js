import chai, { expect } from 'chai';
import chaiStream from 'chai-stream-es6';
import wsOrderBookStream from './WsOrderBookStream';

// chai assertions for streams
chai.use(chaiStream);

describe('wsOrderBookStream', () => {
  it('should return a valid readable stream', () => {
    expect(wsOrderBookStream()).to.be.a.ReadableStream;
  });
});
