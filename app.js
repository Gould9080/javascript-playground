
// REGEX

let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)(.*)(\s*)$/;
let result = hello.replace(wsRegex[0], 'b');

function telephoneCheck(str) {
    let regex = /^1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // 0 or 1 '1', 0 or 1 [-. ]...
    if (str.includes('(') && !str.includes(')')) {
        return false;
    }
    if (str.includes(')') && !str.includes('(')) {
        return false;
    }

    if (str.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}


// STRINGS

function myReplace(str, before, after) {
    if (before === before.toLowerCase()) {
        return str.replace(before, after.toLowerCase());
    }
    else {
        after = after.slice(0, 1).toUpperCase() + after.slice(1);
        return str.replace(before, after);
    }
}

function convertHTML(str) {
    let symbols = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
    }
    for (let sym in symbols) {
        if (str.includes(sym)) {
            str = str.replaceAll(sym, symbols[sym]);
        }
    }

    return str;
}

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (alphabet.includes(str)) {
        return undefined;
    } else {
        let firstInd = alphabet.indexOf(str[0]);
        let section = alphabet.slice(firstInd, firstInd + str.length + 1);
        let missing = section.split("").find(e => !str.includes(e));
        return missing;
    }
}

function palindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let reverse = str.slice();
    reverse = reverse.split('').reverse().join('');
    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

function generateHashtag(str) {
    let arr = str.split(" ").filter(e => e != "");

    let newArr = ["#"];
    arr.forEach(e => {
        newArr.push(e[0].toUpperCase() + e.slice(1));
    });

    console.log(newArr.join(""));

}

// NUMBERS

function fibsRecursion(n) {
    if (n < 2) {
        return n;
    }
    else {
        return fibsRecursion(n - 2) + fibsRecursion(n - 1);
    }
}

function sumFibs(num) {
    let first = 0;
    let second = 1;
    let tempSum = first + second;
    let fibs = [0, 1];
    while (tempSum <= num) {
        fibs.push(tempSum)
        first = second;
        second = tempSum;
        tempSum += first;
    }
    let total = fibs.filter(i => i % 2 === 1).reduce((partialSum, a) => partialSum + a, 0);
    return total;
}

function sumPrimes(num) {
    let primes = [];

    function checkPrime(num) {
        if (num < 2) return false;
        if (num > 2 && num % 2 === 0) return false;
        for (let i = 2; i < (num / 2); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    return primes.reduce((partialSum, a) => partialSum + a, 0);
}

function decToBinary(num) {
    let binary = "";
    while (num > 0) {
        if (num % 2 == 0) {
            binary = 0 + binary;
            num = num / 2;
        } else {
            binary = 1 + binary;
            num = Math.floor(num / 2);
        }
    }
    return binary;
}

function binaryToDec(bin) {
    let binArr = bin.toString().split('');
    let total = 0;
    let power = (binArr.length - 1);
    for (let i = 0; i < binArr.length; i++) {
        total += (binArr[i] * 2 ** power);
        power--;
    }
    return total;
}

function convertToRoman(num) {

    const arabicToRoman = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX",
        10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC",
        100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM",
        1000: "M", 2000: "MM", 3000: "MMM"
    };

    let numArr = String(+num).split("");
    let result = '';
    for (let i = 0; i < numArr.length; i++) {
        let thisKey = numArr[i] * Math.pow(10, numArr.length - i - 1);
        if (arabicToRoman[thisKey]) {
            result += arabicToRoman[thisKey];
        }
    }
    return result;
}

// ARRAYS

function uniteUnique(...arrs) {
    let newArr = [];
    for (let arr of arrs) {
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}

function smallestCommons(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let start = sorted[0];
    let end = sorted[1];
    let filledArr = [];
    for (let i = start; i <= end; i++) {
        filledArr.push(i);
    }
    let currentNum = (sorted[1] * 2);

    function isMulty(element, index, array) {
        return currentNum % element === 0;
    }
    let isMult = false;

    while (isMult === false) {
        if (filledArr.every(isMulty)) {
            isMult = true;
        }
        currentNum++;
    }

    return currentNum - 1;
}

function dropElements(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result = arr.slice(i);
            return result;
        }
    }
    return result;
}

function steamrollArray(arr) {
    var steamrolled = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var subArray = steamrollArray(arr[i]);
            steamrolled = steamrolled.concat(subArray);
        } else {
            steamrolled.push(arr[i]);
        }
    }
    return steamrolled;
}


// MISC

function binaryAgent(str) { // string from binary
    let strArr = str.split(' ');
    let message = [];
    let result = '';
    for (let i = 0; i < strArr.length; i++) {
        let binArr = strArr[i].split('');
        let total = 0;
        let power = (binArr.length - 1);
        for (let i = 0; i < binArr.length; i++) {
            total += (binArr[i] * 2 ** power);
            power--;
        }
        message.push(total);
    }
    for (let i = 0; i < message.length; i++) {
        result += String.fromCharCode(message[i]);
    }
    return result;
}

function truthCheck(collection, pre) {
    let result = true;
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            result = false;
        }
    }
    return result;
}

const Person = function (firstAndLast) {
    let fullName = firstAndLast.split(' ');
    this.getFirstName = function () {
        return fullName[0];
    };
    this.getLastName = function () {
        return fullName[1];
    };
    this.getFullName = function () {
        return fullName.join(' ');
    };
    this.setFirstName = function (first) {
        fullName[0] = first;
    };
    this.setLastName = function (last) {
        fullName[1] = last;
    };
    this.setFullName = function (firstLast) {
        fullName[0] = firstLast.split(' ')[0];
        fullName[1] = firstLast.split(' ')[1];
    };
}

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let alt = arr[i].avgAlt
        newArr[i] = { name: arr[i].name, orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt((earthRadius + alt) ** 3 / GM)) }
    }
    return newArr;
}

function rot13(str) {
    const letters = {
        1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i',
        10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r',
        19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {

        let regex = /[a-z]/gi;
        if (str[i].match(regex)) {
            let letter = str[i];
            let numIndex = Object.keys(letters).find(k => letters[k].toUpperCase() == letter);
            let newNum = +numIndex + 13
            if (newNum > 26) {
                newNum -= 26;
            }
            result += letters[newNum].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

function checkCashRegister(price, cash, cid) {

    const denominations = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }

    let result = { status: '', change: [] };
    let difference = cash - price;
    let totalChange = 0;
    for (let i = 0; i < cid.length; i++) {
        totalChange += Object.values(cid[i])[1];
    }
    totalChange = Math.round(totalChange * 100) / 100;

    let changeArray = [];

    if (difference > totalChange) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }

    else if (Math.round(difference * 100) / 100 === totalChange) {
        result.status = 'CLOSED';
        result.change = cid;
        return result;
    }

    else {
        cid = cid.reverse();
        for (let cash of cid) {
            let thisCash = [cash[0], 0];
            while (difference >= denominations[cash[0]] && cash[1] > 0) {
                thisCash[1] += denominations[cash[0]];
                cash[1] -= denominations[cash[0]];
                difference -= denominations[cash[0]];
                difference = difference.toFixed(2);
            }
            if (thisCash[1] > 0) {
                changeArray.push(thisCash);
            }
        }
    }

    if (difference > 0) {
        result.status = "INSUFFICIENT_FUNDS"
        return result;
    }

    result.status = "OPEN";
    result.change = changeArray;
    return result;
}

