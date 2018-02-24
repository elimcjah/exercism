let Transcriptor = function (){};

Transcriptor.prototype.toRna = function(input){

  let dna = input.split('');
  for(let i = 0; i < dna.length; i++){
    dna[i] === 'C' ? dna[i] = 'G' :
        dna[i] === 'G' ? dna[i] = 'C' :
            dna[i] === 'A' ? dna[i] = 'U' :
                dna[i] === 'T' ? dna[i] = 'A' :
                    (function(){throw 'Invalid input DNA.'}());
  }
  return dna.join('');
};

module.exports = Transcriptor;