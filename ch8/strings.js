
function formatter(sentence) {
    sentence = sentence.toLowerCase();
    let sentenceArr = sentence.split(" ");
    let blankArr = [];

    sentenceArr.forEach((word) => {
        blankArr.push(word[0].toUpperCase().concat(word.slice(1)));
    });

    return blankArr.join(" ");
};

let sentence = "thIs will be capiTalized for each word";
let newSentence = formatter(sentence);

console.log(newSentence);

let vowelSentence = "I love JavaScript";

function vowelReplacer(sentence) {
    sentence = sentence.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];

    vowels.forEach((letter, index) => {
        sentence = sentence.replaceAll(letter, index);
    });

    return sentence;
}
let newVowelSentence = vowelReplacer(vowelSentence);
console.log(newVowelSentence);