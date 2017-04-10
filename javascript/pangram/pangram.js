class Pangram {
    constructor(input) {
        this.input = input;
    }

    isPangram() {
        let el = [];

        for (let i = 0; i < this.input.length; i++) {

            let itsALetter = this.input.toUpperCase().charCodeAt(i);

            if(itsALetter > 64 && itsALetter < 91){
                el.push(itsALetter);
            }
        }

        el.sort();

        let uniq = el => [...new Set(el)];

        return uniq(el).length === 26;
    }
}

module.exports = Pangram;