class Gigasecond{
    constructor(year){
        this.birth = year;
    }

    date(){

        return new Date((this.birth.getTime()/1000 + Math.pow(10,9)) * 1000);
    }
}

module.exports = Gigasecond;
