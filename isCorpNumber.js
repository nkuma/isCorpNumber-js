/**
isCorpNumber.js

Copyright (c) 2015 nkuma https://github.com/nkuma

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
function isCorpNumber() {
    //check data type of CorpNumber
    if (!typeof this === "string") {
        return false;
    }
    //check length
    if (!this.match(/^[0-9]{13}$/)) {
        return false;
    }
    //check digit
    var sum = 0;
    for (var i = 1; i < 13; i++) {
        if (i % 2 === 0) {
            sum += this.substr(i, 1) * 2;
        } else {
            sum += this.substr(i, 1) * 1;
        }
    }
    if (this.substr(12, 1) != 9 - (sum % 9)) {
        return false;
    }
    return true;
}
String.prototype.isCorpNumber = isCorpNumber;
