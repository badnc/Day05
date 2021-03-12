function main() {

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjecive = "big";
    var myAdverb = "quickly";

    var wordBlanks = myNoun + " " + myVerb + " " + myAdjecive  + " " + myAdverb + ".";

    return wordBlanks;
    
}

console.log(main());
module.exports = main;