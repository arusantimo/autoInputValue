/**
 * 숫자를 제외한 문자를 제거
 * @param numberContainsNotDigits 숫자를 제외한 문자열들을 포함한 문자열
 * @return 숫자를 제외한 문자를 제거한 문자열
 */
export const removedNotDigits = (numberContainsNotDigits: string): string => {
  return numberContainsNotDigits.replace(/[^\d]/g, '');
};
