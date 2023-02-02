function sumNumbersInRange(start, end) {
    var result = 0;
    for (var i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

function doubleTotal(start, end, isDouble) {
    var result = sumNumbersInRange(start,end);
    if(isDouble == true) {
        result *=  2;
    }
    return result;
}

console.log("Sum numbers in a range: ", sumNumbersInRange(2,8));

console.log("Do you want to double the total (Yes): ", doubleTotal(2,8,true));
console.log("Do you want to double the total (No): ", doubleTotal(2,8,false));