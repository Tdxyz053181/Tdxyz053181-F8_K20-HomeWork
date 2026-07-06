// Hàm kiểm tra số nguyên tố
function isPrime(number) {
    if (number < 2) {
        return false
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

// Kiểm tra chia hết cho 15
function isDivisibleBy15(number) {
    if (number % 15 ===0) {
        return true
    }
    return false
}

// In tam giác  

function printTriangle(n) {

    for (let i = 1; i <= n; i++) {

        let result = "";
        for (let j = 1; j <= i; j++) {
            if (isDivisibleBy15(j)) {
                result += "#";
            }

            else if (isPrime(j)) {
                result += "*";
            }

            else {
                result += j;
            }

            if (j < i) {
                result += " ";
            }
        }

        console.log(result)

        // In một dòng gạch ngang nếu i là số chẵn
        if (i % 2 === 0) {

            let line = ""

            for (let k = 1; k <= i; k++) {
                line += "-"
            }

            console.log(line);
        }
    }
}

// Test case chính
printTriangle(5);
printTriangle(7);
printTriangle(15);s

// Test case phụ
console.log(isPrime(2))
console.log(isPrime(9))

console.log(isDivisibleBy15(15))
console.log(isDivisibleBy15(2))