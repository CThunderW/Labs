function wordLengths(sentence) { //sentence is entered as an argument
    const words = sentence.split(' '); //this line splits sentence into items in an empty new array
    const result = {}; //
    for (let word of words) {
        result[word] = word.length
    }
    return result;
}