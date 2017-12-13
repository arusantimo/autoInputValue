import {expect} from 'chai';
import 'mocha';
import {autoHyphenBirth, getDate, getDateWithZero, getMonth, getMonthWithZero, getYear, isYY, isYYYY, isZeroMonth} from '../autoHyphenBirth';

describe('autoHyphenBirth', () => {
  const YY_M_D = '9351';
  const YY_MM_D = '94111';
  const YY_MM_DD = '951230';
  const YYYY_M_D = '199377';
  const YYYY_M_DD = '1991617';
  const YYYY_MM_DD = '19950717';
  
  describe('check year format', () => {
    it('test isYY', () => {
      expect(isYY(YY_M_D)).to.be.true;
      expect(isYY(YY_MM_D)).to.be.true;
      expect(isYY(YY_MM_DD)).to.be.true;
      expect(isYY(YYYY_M_D)).to.be.false;
      expect(isYY(YYYY_M_DD)).to.be.false;
      expect(isYY(YYYY_MM_DD)).to.be.false;
    });
  
    it('test isYYYY', () => {
      expect(isYYYY(YY_M_D)).to.be.false;
      expect(isYYYY(YY_MM_D)).to.be.false;
      expect(isYYYY(YY_MM_DD)).to.be.false;
      expect(isYYYY(YYYY_M_D)).to.be.true;
      expect(isYYYY(YYYY_M_DD)).to.be.true;
      expect(isYYYY(YYYY_MM_DD)).to.be.true;
    });
  });
  
  describe('check', () => {
    it('test isZeroMonth', () => {
      expect(isZeroMonth(YY_M_D)).to.be.true;
      expect(isZeroMonth(YY_MM_D)).to.be.false;
      expect(isZeroMonth(YY_MM_DD)).to.be.false;
      expect(isZeroMonth(YYYY_M_D)).to.be.true;
      expect(isZeroMonth(YYYY_M_DD)).to.be.true;
      expect(isZeroMonth(YYYY_MM_DD)).to.be.false;
    });
  });
  
  describe('get year, month, date', () => {
    it('test getYear', () => {
      expect(getYear(YY_M_D)).to.be.equal('93');
      expect(getYear(YY_MM_D)).to.be.equal('94');
      expect(getYear(YY_MM_DD)).to.be.equal('95');
      expect(getYear(YYYY_M_D)).to.be.equal('1993');
      expect(getYear(YYYY_M_DD)).to.be.equal('1991');
      expect(getYear(YYYY_MM_DD)).to.be.equal('1995');
    });
  
    it('test getMonth', () => {
      expect(getMonth(YY_M_D)).to.be.equal('5');
      expect(getMonth(YY_MM_D)).to.be.equal('11');
      expect(getMonth(YY_MM_DD)).to.be.equal('12');
      expect(getMonth(YYYY_M_D)).to.be.equal('7');
      expect(getMonth(YYYY_M_DD)).to.be.equal('6');
      expect(getMonth(YYYY_MM_DD)).to.be.equal('07');
    });
  
    it('test getMonthWithZero', () => {
      expect(getMonthWithZero(YY_M_D)).to.be.equal('05');
      expect(getMonthWithZero(YY_MM_D)).to.be.equal('11');
      expect(getMonthWithZero(YY_MM_DD)).to.be.equal('12');
      expect(getMonthWithZero(YYYY_M_D)).to.be.equal('07');
      expect(getMonthWithZero(YYYY_M_DD)).to.be.equal('06');
      expect(getMonthWithZero(YYYY_MM_DD)).to.be.equal('07');
    });
  
    it('test getDate', () => {
      expect(getDate(YY_M_D)).to.be.equal('1');
      expect(getDate(YY_MM_D)).to.be.equal('1');
      expect(getDate(YY_MM_DD)).to.be.equal('30');
      expect(getDate(YYYY_M_D)).to.be.equal('7');
      expect(getDate(YYYY_M_DD)).to.be.equal('17');
      expect(getDate(YYYY_MM_DD)).to.be.equal('17');
    });
  
    it('test getDateWithZero', () => {
      expect(getDateWithZero(YY_M_D)).to.be.equal('01');
      expect(getDateWithZero(YY_MM_D)).to.be.equal('01');
      expect(getDateWithZero(YY_MM_DD)).to.be.equal('30');
      expect(getDateWithZero(YYYY_M_D)).to.be.equal('07');
      expect(getDateWithZero(YYYY_M_DD)).to.be.equal('17');
      expect(getDateWithZero(YYYY_MM_DD)).to.be.equal('17');
    });
  });
  
  describe('generate phone number with hyphen', () => {
    it('test autoHyphenPhone', () => {
      expect(autoHyphenBirth(YY_M_D)).to.be.equal('93-05-01');
      expect(autoHyphenBirth(YY_MM_D)).to.be.equal('94-11-01');
      expect(autoHyphenBirth(YY_MM_DD)).to.be.equal('95-12-30');
      expect(autoHyphenBirth(YYYY_M_D)).to.be.equal('1993-07-07');
      expect(autoHyphenBirth(YYYY_M_DD)).to.be.equal('1991-06-17');
      expect(autoHyphenBirth(YYYY_MM_DD)).to.be.equal('1995-07-17');
    });
  });
});
