class BeerSong {
    constructor(){
        this.many1 = ' bottles of beer on the wall, ';
        this.many2 = ' bottles of beer.\nTake one down and pass it around, ';
        this.many3 = ' bottles of beer on the wall.\n';
        this.single = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no ' +
            'more bottles of beer on the wall.\n';
        this.single2 = ' bottle of beer on the wall.\n';
        this.noBottles = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    }

    verse(input){

        let classic = '';

        input > 2 ? classic += input+ this.many1 + input + this.many2 + (input- 1) + this.many3          :
            input === 2 ? classic += input+ this.many1 + input + this.many2 + (input- 1) + this.single2  :
                input === 1 ? classic += this.single                                                     :
                    classic += this.noBottles;
        return classic;
    }

    sing(begin, end){

        let classic = '';

        let stop;

        end ? stop = end : stop = 0;

        for (let i = begin; i >= stop; i--) {
            i > 2 && i !== stop ? classic += i+ this.many1 + i + this.many2 + (i- 1) + this.many3 + '\n' :
                i > 2 && i === stop ? classic += i+ this.many1 + i + this.many2 + (i- 1) + this.many3    :
                    i === 2 ? classic += i+ this.many1 + i + this.many2 + (i- 1) + this.single2 + '\n'   :
                        i === 1 ? classic += this.single + '\n'                                          :
                            classic += this.noBottles;
        }
        return classic;
    }
}

module.exports = BeerSong;