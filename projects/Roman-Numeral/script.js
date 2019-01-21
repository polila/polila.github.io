const numbers = {
    // ones: 1, 4, 5, 9
    0: "",
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    // tens: 10, 40, 50, 90
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    // hundreds: 100, 400, 500, 900
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    // thousands: 1000
    1000: "M"
};

function convert(num, temp, str) {
    if (num <= 0) {
        return str;
    } else {
        if (numbers[temp] != undefined) {
            str += numbers[temp];
            return convert(num - temp, num - temp, str);
        } else {
            return convert(num, --temp, str);
        }
    }
}

function convertToRoman(num) {
    return convert(num, num, "");
}

document.getElementById("submit-bttn").onclick = function() {

    const inputNumber = document.getElementById('num-input').value;
    
    const para = document.createElement("p");
    
    document.getElementById("output").appendChild(para).innerHTML = convertToRoman(parseInt(inputNumber));
}

document.getElementById("print-bttn").onclick = function() {

    let para;

    for (let i = 1; i < 5000; i++) {
        
        para = document.createElement("p");
                
        document.getElementById("output-2").appendChild(para).innerHTML = i + " | " + convertToRoman(parseInt(i));

    }
}