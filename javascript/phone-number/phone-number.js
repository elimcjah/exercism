class PhoneNumber{
    constructor(input){
        this.incorrect = '0000000000';
        this.input = input;
    }

    number(){

        let onlyNums = this.input.replace(/[^0-9]/g, '');

        return onlyNums.length === 11 && onlyNums[0] === '1' ? onlyNums = onlyNums.substr(1) :
            onlyNums.length > 10 && onlyNums[0]  !== '1' ? onlyNums = this.incorrect  :
                onlyNums.length < 10 ? onlyNums = this.incorrect                      :
                 onlyNums;
    }

    areaCode(){
        return this.number().substr(0, 3);
    }

    toString(){
        return '(' + this.areaCode() + ') ' +  this.number().substr(3, 3) + '-' + this.number().substr(6);
    }
}

module.exports = PhoneNumber;