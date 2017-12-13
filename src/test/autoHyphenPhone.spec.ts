import {autoHyphenPhone, getFirstSeqNumber, getLastSeqNumber, getMidSeqNumber, isFullNum,
  isNotContainsFirstSeqNum, isSeparatedPhoneNumber} from '../autoHyphenPhone';
import {expect} from 'chai';
import 'mocha';

describe('autoHyphenPhone', () => {
  const SEPARATE_PHONE_NUMBER_1 = '921';
  const SEPARATE_PHONE_NUMBER_2 = '9376';
  const NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1 = '9219376';
  const NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2 = '74249214';
  const FULL_PHONE_NUMBER_1 = '0177449379';
  const FULL_PHONE_NUMBER_2 = '01974249215';
  
  describe('check phone number sequence', () => {
    it('test isSeparatedPhoneNumber', () => {
      expect(isSeparatedPhoneNumber(SEPARATE_PHONE_NUMBER_1)).to.be.true;
      expect(isSeparatedPhoneNumber(SEPARATE_PHONE_NUMBER_2)).to.be.true;
      expect(isSeparatedPhoneNumber(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1)).to.be.false;
      expect(isSeparatedPhoneNumber(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2)).to.be.false;
      expect(isSeparatedPhoneNumber(FULL_PHONE_NUMBER_1)).to.be.false;
      expect(isSeparatedPhoneNumber(FULL_PHONE_NUMBER_2)).to.be.false;
    });
  
    it('test isNotContainsFirstSeqNum', () => {
      expect(isNotContainsFirstSeqNum(SEPARATE_PHONE_NUMBER_1)).to.be.false;
      expect(isNotContainsFirstSeqNum(SEPARATE_PHONE_NUMBER_2)).to.be.false;
      expect(isNotContainsFirstSeqNum(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1)).to.be.true;
      expect(isNotContainsFirstSeqNum(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2)).to.be.true;
      expect(isNotContainsFirstSeqNum(FULL_PHONE_NUMBER_1)).to.be.false;
      expect(isNotContainsFirstSeqNum(FULL_PHONE_NUMBER_2)).to.be.false;
    });
  
    it('test isFullNum', () => {
      expect(isFullNum(SEPARATE_PHONE_NUMBER_1)).to.be.false;
      expect(isFullNum(SEPARATE_PHONE_NUMBER_2)).to.be.false;
      expect(isFullNum(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1)).to.be.false;
      expect(isFullNum(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2)).to.be.false;
      expect(isFullNum(FULL_PHONE_NUMBER_1)).to.be.true;
      expect(isFullNum(FULL_PHONE_NUMBER_2)).to.be.true;
    });
  });
  
  describe('get phone number sequence', () => {
    it('test getFirstSeqNumber', () => {
      expect(getFirstSeqNumber(FULL_PHONE_NUMBER_1)).to.be.equal('017');
      expect(getFirstSeqNumber(FULL_PHONE_NUMBER_2)).to.be.equal('019');
    });
    
    it('test getMidSeqNumber', () => {
      expect(getMidSeqNumber(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1)).to.be.equal('921');
      expect(getMidSeqNumber(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2)).to.be.equal('7424');
      expect(getMidSeqNumber(FULL_PHONE_NUMBER_1)).to.be.equal('744');
      expect(getMidSeqNumber(FULL_PHONE_NUMBER_2)).to.be.equal('7424');
    });
    
    it('test getLastSeqNumber', () => {
      expect(getLastSeqNumber(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1)).to.be.equal('9376');
      expect(getLastSeqNumber(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2)).to.be.equal('9214');
      expect(getLastSeqNumber(FULL_PHONE_NUMBER_1)).to.be.equal('9379');
      expect(getLastSeqNumber(FULL_PHONE_NUMBER_2)).to.be.equal('9215');
    });
  });
  
  describe('generate phone number with hyphen', () => {
    it('test autoHyphenPhone', () => {
      expect(autoHyphenPhone(SEPARATE_PHONE_NUMBER_1)).to.be.equal('921');
      expect(autoHyphenPhone(SEPARATE_PHONE_NUMBER_2)).to.be.equal('9376');
      expect(autoHyphenPhone(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_1)).to.be.equal('921-9376');
      expect(autoHyphenPhone(NOT_CONTAINS_FIRST_SEQUENCE_PHONE_NUMBER_2)).to.be.equal('7424-9214');
      expect(autoHyphenPhone(FULL_PHONE_NUMBER_1)).to.be.equal('017-744-9379');
      expect(autoHyphenPhone(FULL_PHONE_NUMBER_2)).to.be.equal('019-7424-9215');
    });
  });
});
