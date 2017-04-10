
class Anagram {
    constructor(analyseThis){

        this.analyseThis = analyseThis;

    }

    matches(listOfWords){

        let answer = [];
        if (typeof listOfWords === 'string' || listOfWords instanceof String){
           listOfWords = [].slice.apply(arguments);
        }

        let upCaseInput = this.analyseThis.toUpperCase();
        let upCaseSorted = upCaseInput.split('').sort().join('');

        listOfWords.forEach(function (element){

            let goodOne = element.toUpperCase();

            if (goodOne !== upCaseInput){
                goodOne = goodOne.split('').sort().join('');
                if(goodOne === upCaseSorted){
                    answer.push(element);
                }
            }
        });
        return answer;
    }
}
module.exports = Anagram;