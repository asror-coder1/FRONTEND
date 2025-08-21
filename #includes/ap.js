const sentence = "The quick brown fox jumps over the lazy gog.";

const word ="fox";

console.log(
    `The word"${word}"${
        sentence.includes(word)?"is":"is not"
    }in the sentence`,
)