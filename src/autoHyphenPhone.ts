import {removedNotDigits} from './util';

// todo: make InvalidPhoneNumberException

// todo: 글로벌화를 위해 영어로 코멘트 작성

/**
 * 자릿수가 분리된 숫자인지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 3~4자리 숫자일 경우 true
 */
export const isSeparatedPhoneNumber = (phoneNumber: string): boolean => {
  const regExp = /^\d{3,4}$/;
  return regExp.test(phoneNumber);
};

/**
 * 통신사를 포함하지 않고 가운데 자리가 3자인지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 통신사를 포함하지 않고 가운데 자리가 3자일 경우 true
 */
const isNotContainsFirstSeqNumAndMidNumLenThree = (phoneNumber: string): boolean => {
  const regExp = /^\d{7}$/;
  return regExp.test(phoneNumber);
};

/**
 * 통신사를 포함하지 않고 가운데 자리가 4자인지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 통신사를 포함하지 않고 가운데 자리가 4자일 경우 true
 */
const isNotContainsFirstSeqNumAndMidNumLenFour = (phoneNumber: string): boolean => {
  const regExp = /^\d{8}$/;
  return regExp.test(phoneNumber);
};

/**
 * 통신사를 포함하지 않았는지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 통신사를 포함하지 않은 경우 true
 */
export const isNotContainsFirstSeqNum = (phoneNumber: string): boolean => {
  return isNotContainsFirstSeqNumAndMidNumLenThree(phoneNumber) || isNotContainsFirstSeqNumAndMidNumLenFour(phoneNumber);
};

/**
 * 통신사를 포함하고 있고 가운데 자리가 3자인지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 통신사를 포함하고 있고 가운데 자리가 3자일 경우 true
 */
const isFullNumAndMidNumLenThree = (phoneNumber: string): boolean => {
  const regExp = /^\d{10}$/;
  return regExp.test(phoneNumber);
};

/**
 * 통신사를 포함하고 있고 가운데 자리가 4자인지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 통신사를 포함하고 있고 가운데 자리가 4자일 경우 true
 */
const isFullNumAndMidNumLenFour = (phoneNumber: string): boolean => {
  const regExp = /^\d{11}$/;
  return regExp.test(phoneNumber);
};

/**
 * 통신사를 포함한 전체 휴대폰 번호인지 체크
 * @param phoneNumber 핸드폰 번호
 * @return 통신사를 포함한 전체 휴대폰 번호인 경우 true
 */
export const isFullNum = (phoneNumber: string): boolean => {
  return isFullNumAndMidNumLenThree(phoneNumber) || isFullNumAndMidNumLenFour(phoneNumber);
};

/**
 * 통신사 번호를 추출하는 함수
 * @param phoneNumber 핸드폰 번호
 * @return 통신사 번호
 */
export const getFirstSeqNumber = (phoneNumber: string): string => {
  return phoneNumber.substr(0, 3);
};

/**
 * 가운데 번호를 추출하는 함수
 * @param phoneNumber 핸드폰 번호
 * @return 가운데 번호
 */
export const getMidSeqNumber = (phoneNumber: string): string => {
  if(isNotContainsFirstSeqNumAndMidNumLenThree(phoneNumber)) return phoneNumber.substr(0, 3);
  if(isNotContainsFirstSeqNumAndMidNumLenFour(phoneNumber)) return phoneNumber.substr(0, 4);
  if(isFullNumAndMidNumLenThree(phoneNumber)) return phoneNumber.substr(3, 3);
  if(isFullNumAndMidNumLenFour(phoneNumber)) return phoneNumber.substr(3, 4);
  
  return 'invalid phone number';
};

/**
 * 마지막 번호를 추출하는 함수
 * @param phoneNumber 핸드폰 번호
 * @return 마지막 번호
 */
export const getLastSeqNumber = (phoneNumber: string): string => {
  if(isNotContainsFirstSeqNumAndMidNumLenThree(phoneNumber)) return phoneNumber.substr(3);
  if(isNotContainsFirstSeqNumAndMidNumLenFour(phoneNumber)) return phoneNumber.substr(4);
  if(isFullNumAndMidNumLenThree(phoneNumber)) return phoneNumber.substr(6);
  if(isFullNumAndMidNumLenFour(phoneNumber)) return phoneNumber.substr(7);
  
  return 'invalid phone number';
};

/**
 * 숫자로만 이루어진 휴대폰 번호에 자동으로 하이픈(-)을 붙여주는 함수
 * @param phoneNumber 핸드폰 번호
 * @return 하이픈을 포함한 핸드폰 번호
 */
export const autoHyphenPhone = (phoneNumber: string): string => {
  const phoneNumberOnlyDigits = removedNotDigits(phoneNumber);
  if(isSeparatedPhoneNumber(phoneNumberOnlyDigits)) return phoneNumberOnlyDigits;
  if(isNotContainsFirstSeqNum(phoneNumberOnlyDigits)) {
    return `${getMidSeqNumber(phoneNumberOnlyDigits)}-${getLastSeqNumber(phoneNumberOnlyDigits)}`;
  }
  if(isFullNum(phoneNumberOnlyDigits)) {
    return `${getFirstSeqNumber(phoneNumberOnlyDigits)}-${getMidSeqNumber(phoneNumberOnlyDigits)}-${getLastSeqNumber(phoneNumberOnlyDigits)}`;
  }
  
  return 'invalid phone number';
};
