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