export function autoHypenBirth(value) {
  value = value.replace(/[^0-9]/g, '');
  let yy = value;
  let mm = '';
  let dd = '';
  if (value.length > 4) {
    yy = value.substr(0, 4) + '-';
    if (value.substr(4, 1) === '0' || value.substr(4, 1) === '1') {
      mm += value.substr(4, 2);
    } else {
      mm += '0';
      mm += value.substr(4, 1);
    }
  }
  if (value.length > 6) {
    dd += '-';
    if (value.substr(6, 1) === '0' || value.substr(6, 1) === '1' || value.substr(6, 1) === '2' || value.substr(6, 1) === '3') {
      dd += value.substr(6);
    } else {
      dd += '0';
      dd += value.substr(6);
    }
  }
  if (Number(mm) > 12) {
    mm = '12';
  }
  if (Number(dd) < -31) {
    dd = '-31';
  }
  return yy + mm + dd;
}

export function autoHypenPhone(value) {
  value = value.replace(/[^0-9]/g, '');
  let tmp = '';
  if (value.length < 4) {
    return value;
  } else if (value.length < 7) {
    tmp += value.substr(0, 3);
    tmp += '-';
    tmp += value.substr(3);
    return tmp;
  } else if (value.length < 11) {
    tmp += value.substr(0, 3);
    tmp += '-';
    tmp += value.substr(3, 3);
    tmp += '-';
    tmp += value.substr(6);
    return tmp;
  } else {
    tmp += value.substr(0, 3);
    tmp += '-';
    tmp += value.substr(3, 4);
    tmp += '-';
    tmp += value.substr(7);
    return tmp;
  }
}
export const removeHypen = (value) => value.replace(/\-/g, '');