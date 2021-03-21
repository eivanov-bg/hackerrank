'use strict';

function superReducedString(s) {
   const adjacentChars = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm',
                          'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz'];

   let result = s;
   let shouldIterate = result.length > 0;

   while (shouldIterate) {
       const initialLen = result.length;

       for (let chars of adjacentChars) {
           result = result.replace(new RegExp(chars, 'g'), '');
       }

       shouldIterate = result.length > 0 && result.length < initialLen;
   }

   return result.length > 0 ? result : 'Empty String';
}

module.exports = superReducedString;
