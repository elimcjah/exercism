let Hamming = function() {};

Hamming.prototype.compute = function(a, b){
    let c = 0;
    if(b.length < a.length){
        throw 'DNA strands must be of equal length.';
    }
    for(let i=0; i < a.length; i++){
        if(a.charAt(i) !== b.charAt(i)){
            c++;
        }
    }
    return c;
}

module.exports = Hamming;

