// Hàm 1: getAverage(scores)

function getAverage(scores) {
    let sum = 0
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    let average = sum / scores.length;

    return Number(average.toFixed(1))
}

// console.log(getAverage([8.5, 7, 9, 6.5]));
// console.log(getAverage([10, 9.5, 8, 10]));

// Hàm 2: classifyStudent(average)


function classifyStudent(average) {
    if (average >= 9) {
        return "Xuất sắc";
    } else if (average >= 8) {
        return "Giỏi";
    } else if (average >= 6.5) {
        return "Khá";
    } else if (average >= 5) {
        return "Trung bình";
    }
    return "Yếu";
}

// console.log(classifyStudent(9.4))
// console.log(classifyStudent(7.8))
// console.log(classifyStudent(4.5))

// Hàm 3: isValidScore(score)

function isValidScore(score) {
    if (score >= 0 && score <= 10) {
        return true
    }
    return false
}

// console.log(isValidScore(8.5))
// console.log(isValidScore(-1))
// console.log(isValidScore(11))
// console.log(isValidScore(Infinity))
// console.log(isValidScore(NaN))

// Hàm 4: getReportCard(examResults)

function getReportCard(examResults) {
    let report = [];

    for (let i = 0; i < examResults.length; i++) {

        let student = examResults[i];

        let average = getAverage(student.scores);

        let classification = classifyStudent(average);

        report.push({           
            student: student.student,
            average: average,
            classification: classification
        });
    }

    return report;
}

const examResults = [
    { student: "An", scores: [8.5, 7, 9, 6.5] },
    { student: "Bình", scores: [10, 9.5, 8, 10] },
    { student: "Chi", scores: [5, 4.5, 6, 5.5] },
    { student: "Duy", scores: [7, 7, 7, 7] },
];

console.log(getReportCard(examResults));   

