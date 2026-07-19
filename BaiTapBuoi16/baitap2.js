const text = "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

// Hàm 1
function getWords(text) {
    return text.split(" ");
}

// Hàm 2
function countWord(text, word) {
    return text.split(" ").filter(function (item) {
        return item === word;
    }).length;
}

// Hàm 3
function getUniqueWords(text) {
    return text.split(" ")
        .filter(function (word, index, array) {
            return array.indexOf(word) === index;
        })
        .sort();
}

// Hàm 4
function getTopWords(text, n) {
    const words = text.split(" ");
    const result = [];

    words.forEach(function (word) {

        const existed = result.find(function (item) {
            return item.word === word;
        });

        if (existed) {
            existed.count++;
        } else {
            result.push({
                word: word,
                count: 1
            });
        }

    });

    result.sort(function (a, b) {
        return b.count - a.count;
    });

    return result.slice(0, n);
}

// Hàm 5
function highlight(text, word) {
    return text.replaceAll(word, "**" + word + "**");
}

// Text Case

console.log(getWords(text));

console.log(countWord(text, "javascript"));
console.log(countWord(text, "chạy"));
console.log(countWord(text, "python"));

console.log(getUniqueWords(text));

console.log(getTopWords(text, 3));
console.log(highlight(text, "javascript"));
