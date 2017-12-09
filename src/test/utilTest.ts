import {removedNotDigits} from '../util';
import {expect} from 'chai';
import 'mocha';

describe('util', () => {
  it('test removedNotDigits', () => {
    expect(removedNotDigits('0123')).to.be.equal('0123');
    expect(removedNotDigits('010-123-3333')).to.be.equal('0101233333');
    expect(removedNotDigits('93/05/30')).to.be.equal('9/30530');
  });
});
