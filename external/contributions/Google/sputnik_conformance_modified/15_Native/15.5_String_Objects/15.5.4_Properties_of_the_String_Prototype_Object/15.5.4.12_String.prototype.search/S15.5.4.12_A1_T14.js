// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T14;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Instance is string, argument is regular expression;
*/

var __reg = new RegExp("77");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB\u0037\u0037BBAA".search(__reg) !== 9) {
  $ERROR('#1: var __reg = new RegExp("77"); "ABB\\u0041BABAB\\u0037\\u0037BBAA".search(__reg) === 9. Actual: '+("ABB\u0041BABAB\u0037\u0037BBAA".search(__reg)) );
}
//
//////////////////////////////////////////////////////////////////////////////
