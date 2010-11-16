// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A22;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of DecimalDigit ::: 6 or of HexDigit ::: 6 is 6;
 * @description: Compare Number('0x6') and Number('0X6') with 6;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A22",

path: "9.3.1, 15.7.1",

description: "Compare Number(\'0x6\') and Number(\'0X6\') with 6",

test: function testcase() {
   // CHECK#1
if (Number("6") !== 6)  {
  $ERROR('#1: Number("6") === 6. Actual: ' + (Number("6")));
}

// CHECK#2
if (+("0x6") !== 6)  {
  $ERROR('#2: +("0x6") === 6. Actual: ' + (+("0x6")));
}

// CHECK#3
if (Number("0X6") !== 6)  {
  $ERROR('#3: Number("0X6") === 6. Actual: ' + (Number("0X6")));
}

 }
});
