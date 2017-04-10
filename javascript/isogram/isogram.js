class Isogram {
    constructor(input){
        this.word = input
    }

    isIsogram(){

        let noChar =  this.word.toUpperCase().replace(/[^a-zA-Zäöüß]/gi, '').split('').sort();
        for (let i = 0; i < noChar.length - 1; i++) {
            if (noChar[i + 1] === noChar[i]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Isogram;
