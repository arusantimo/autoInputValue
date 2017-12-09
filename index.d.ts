declare module 'auto-hyphen' {
  /**
   * 숫자로만 이루어진 휴대폰 번호에 자동으로 하이픈(-)을 붙여주는 함수
   * @param phoneNumber 핸드폰 번호
   * @return 하이픈을 포함한 핸드폰 번호
   */
  export function autoHyphenPhone(phoneNumber: string): string;
  
  /**
   * 숫자로만 이루어진 생년월일에 자동으로 하이픈(-)을 붙여주는 함수
   * @param birth 생년월일
   * @return 하이픈을 포함한 생년월일
   */
  export function autoHyphenBirth(birth: string): string;
  
  /**
   * 숫자를 제외한 문자를 제거
   * @param numberContainsNotDigits 숫자를 제외한 문자열들을 포함한 문자열
   * @return 숫자를 제외한 문자를 제거한 문자열
   */
  export function removedNotDigits(numberContainsNotDigits: string): string;
}
