/**
 * Created by EliMcJah on 4/6/17.
 */

// Bob answers 'Sure.' if you ask him a question.
//
//     He answers 'Whoa, chill out!' if you yell at him.
//
//     He says 'Fine. Be that way!' if you address him without actually saying anything.

class Bob{

    hey(input){

        if (!/\S/.test(input)) {
            console.log('Fine. Be that way!');
            return 'Fine. Be that way!';
        }

        let loCase  = 0;
        let upCase  = 0;
        let other   = 0;
        let wCount  = input.split(' ').length;

        let el = [];

        for(let i = 0; i < input.length; i++){
            el.push(input.charCodeAt(i));
            input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91 ? upCase++ :
                input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123 ? loCase++ :
                    input.charCodeAt(i) > 127 && input.charCodeAt(i) < 166 ? umlauts++ :
                        other++;
        }

        if(wCount === 1 && el[el.length - 1] !== 63 && el[el.length - 1] !== 33){
            console.log('Whatever.');
            return 'Whatever.';
        }
        if(upCase > loCase){
            console.log('Whoa, chill out!');
            return 'Whoa, chill out!';
        }
        if(el[el.length - 1] === 63){
            return 'Sure.';
        }
        if(loCase > 2 && el[el.length - 1] !== 63){
            console.log('Whatever.');
            return 'Whatever.';
        }
        if( other > 0 && loCase === 0 && upCase === 0 ){
            console.log('Whatever.');
            return 'Whatever.';
        }
    }
}

module.exports = Bob;