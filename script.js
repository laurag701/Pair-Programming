//Easy(1)
function oddEvenArr (arr) {
    let odd = [];
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    const returnNum = {
        odd,
        even,
    };

    return returnNum;
}
console.log(oddEvenArr([2, 4, 7, 11, 15, 16]));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Easy(2)
function isPrime(num) {
    for (let i = 2; i < num; i ++)
    if (num % i === 0)
    return false;
    return num > 1;
}
console.log(isPrime( 2, 3, 4, 5, 6, 7, 8, 9, 10));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Medium(1)
function vowelChecker (x) {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
        console.log ("This is a vowel");
    } else {
        console.log("This is not a vowel");
    }
}
vowelChecker("a"); //This is a vowel
vowelChecker("b"); //This is not a vowel

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Medium(2)
function isAnagram (a, b) {
    let string1 = a.replaceAll(' ', '').toLowerCase().split('').sort().join('')
    let string2 = b.replaceAll(' ', '').toLowerCase().split('').sort().join('')
    if (string1 === string2) {
        console.log(`${string1} and ${string2} are anagrams`);
        return
    } else {
        console.log(`${string1} and ${string2} are not angrams`);
        return
    }
}
console.log(isAnagram('race', 'care')); //acer and acer are anagrams
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Medium(3)
var gcd = function (a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b)
}

console.log(gcd(336,360));