/**
 * Created by Elijah McClendon on 1/11/18.
 */

class Year{
  constructor(y){
    this.year = y;
  }

  isLeap()  {
    return this.year % 4 === 0 || this.year%100 === 0 || this.year%100 === 0 && this.year % 400 === 0 || this.year%100 !== 0;
  }
}

module.exports = Year;