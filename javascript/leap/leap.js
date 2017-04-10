class Year{
    constructor(y){
        this.year = y;
    }

   isLeap()  {
        if(this.year%4 === 0){
            if(this.year%100 === 0) {
                return this.year % 400 === 0;
            }
            return this.year%100 !== 0;
        }
        return false;
    }
}

module.exports = Year;

