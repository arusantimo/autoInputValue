import {removedNotDigits} from './util';

// todo: make InvalidBirthException

// todo: 93111의 경우 93-11-01인지, 93-01-11인지 숫자만으로는 알 길이 없으니 데이트 포맷을 받아야함.

// todo: 변수명 리팩토링

// todo: 글로벌화를 위해 영어로 코멘트 작성

/**
 * 날짜 포맷 중 연도가 yy인지 확인하는 함수
 * @param birth 생년월일
 * @return 날짜 포맷 중 연도가 yy일 경우 true
 */
export const isYY = (birth: string): boolean => {
  const regExp = /^\d{4,6}$/;
  const yyyy = +birth.substr(0, 4);
  return regExp.test(birth) && yyyy > 2100;
};

/**
 * 날짜 포맷 중 연도가 yyyy인지 확인하는 함수
 * @param birth 생년월일
 * @return 날짜 포맷 중 연도가 yyyy일 경우 true
 */
export const isYYYY = (birth: string): boolean => {
  const regExp = /^\d{6,8}$/;
  const yyyy = +birth.substr(0, 4);
  return regExp.test(birth) && yyyy < 2100;
};

/**
 * 날짜 포맷 중 월을 구할 때 0을 붙여야하는지 판별하는 함수
 * @param birth 생년월일
 * @return 1~9월이면서 앞자리에 0이 안 붙은 경우 true
 */
export const isZeroMonth = (birth: string): boolean => {
  let month = '-1';
  
  if(isYY(birth)) month = birth.substr(2, 2);
  else if(isYYYY(birth)) month = birth.substr(4, 2);
  
  if(+month === -1) return false;
  
  const firstNumOfMonth = +month[0];
  
  if(firstNumOfMonth === 0) return false;
  return +month < 10 || +month > 12;
};

/**
 * 날짜 포맷 중 연도를 구하는 함수
 * @param birth 생년월일
 * @return yy or yyyy
 */
export const getYear = (birth: string): string => {
  if(isYY(birth)) return birth.substr(0, 2);
  if(isYYYY(birth)) return birth.substr(0, 4);
  return 'invalid birth';
};

/**
 * 날짜 포맷 중 월을 구하는 함수.
 * @param birth 생년월일
 * @return original month
 */
export const getMonth = (birth: string): string => {
  let month;
  if(isYY(birth)) {
    month = birth.substr(2, 2);
    if(isZeroMonth(birth)) month = month[0];
  }
  if(isYYYY(birth)) {
    month = birth.substr(4, 2);
    if(isZeroMonth(birth)) month = month[0];
  }
  return month;
};

/**
 * 날짜 포맷 중 월을 구하는 함수, 1~9월은 0을 붙임.
 * @param birth 생년월일
 * @return 1~9월이면서 앞자리에 0이 안 붙은 경우에만 0을 붙이고 나머지는 원래 월을 반환
 */
export const getMonthWithZero = (birth: string): string => {
  const month = getMonth(birth);
  return (+month < 10 && +month[0] !== 0) ? `0${month}` : month;
};

/**
 * 날짜 포맷 중 일을 구하는 함수.
 * @param birth 생년월일
 * @return original date
 */
export const getDate = (birth: string): string => {
  let monthAndDay = '-1';
  
  if(isYY(birth)) monthAndDay = birth.substr(2);
  else if(isYYYY(birth)) monthAndDay = birth.substr(4);
  
  if(+monthAndDay === -1) return 'invalid birth';
  return monthAndDay.replace(getMonth(birth), '');
};

/**
 * 날짜 포맷 중 일을 구하는 함수, 1~9일은 0을 붙임.
 * @param birth 생년월일
 * @return 1~9일이면서 앞자리에 0이 안 붙은 경우에만 0을 붙이고 나머지는 원래 일을 반환
 */
export const getDateWithZero = (birth: string): string => {
  const date = getDate(birth);
  return (+date < 10 && +date[0] !== 0) ? `0${date}` : date;
};

/**
 * 숫자로만 이루어진 생년월일에 자동으로 하이픈(-)을 붙여주는 함수
 * @param birth 생년월일
 * @return 하이픈을 포함한 생년월일
 */
export const autoHyphenBirth = (birth: string): string => {
  const birthOnlyDigits = removedNotDigits(birth);
  
  return `${getYear(birthOnlyDigits)}-${getMonthWithZero(birthOnlyDigits)}-${getDateWithZero(birthOnlyDigits)}`;
};
