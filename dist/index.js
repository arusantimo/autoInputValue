!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.autoHyphen={})}(this,function(t){"use strict";var n=function(t){return t.replace(/[^\d]/g,"")},r=function(t){var n=+t.substr(0,4);return/^\d{4,6}$/.test(t)&&n>2100},u=function(t){var n=+t.substr(0,4);return/^\d{6,8}$/.test(t)&&n<2100},e=function(t){var n="-1";if(r(t)?n=t.substr(2,2):u(t)&&(n=t.substr(4,2)),-1==+n)return!1;return 0!=+n[0]&&(+n<10||+n>12)},s=function(t){var n;return r(t)&&(n=t.substr(2,2),e(t)&&(n=n[0])),u(t)&&(n=t.substr(4,2),e(t)&&(n=n[0])),n},i=function(t){var n=function(t){var n="-1";return r(t)?n=t.substr(2):u(t)&&(n=t.substr(4)),-1==+n?"invalid birth":n.replace(s(t),"")}(t);return+n<10&&0!=+n[0]?"0"+n:n},o=function(t){return/^\d{7}$/.test(t)},f=function(t){return/^\d{8}$/.test(t)},c=function(t){return/^\d{10}$/.test(t)},b=function(t){return/^\d{11}$/.test(t)},d=function(t){return o(t)?t.substr(0,3):f(t)?t.substr(0,4):c(t)?t.substr(3,3):b(t)?t.substr(3,4):"invalid phone number"},a=function(t){return o(t)?t.substr(3):f(t)?t.substr(4):c(t)?t.substr(6):b(t)?t.substr(7):"invalid phone number"};t.autoHyphenBirth=function(t){var e=n(t);return function(t){return r(t)?t.substr(0,2):u(t)?t.substr(0,4):"invalid birth"}(e)+"-"+function(t){var n=s(t);return+n<10&&0!=+n[0]?"0"+n:n}(e)+"-"+i(e)},t.autoHyphenPhone=function(t){var r=n(t);return function(t){return/^\d{3,4}$/.test(t)}(r)?r:function(t){return o(t)||f(t)}(r)?d(r)+"-"+a(r):function(t){return c(t)||b(t)}(r)?function(t){return t.substr(0,3)}(r)+"-"+d(r)+"-"+a(r):"invalid phone number"},t.removedNotDigits=n,Object.defineProperty(t,"__esModule",{value:!0})});
