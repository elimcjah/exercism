class FoodChain{
    constructor(){
        this.iKnow        = 'I know an old lady who swallowed a ';
        this.sheSwallowed = 'She swallowed the ';
        this.toCatch      = ' to catch the ';

        this.fly1         = 'fly';
        this.fly2         = '\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
        this.spider1      = 'spider';
        this.spider2      = 'It wriggled and jiggled and tickled inside her.\n';
        this.bird1        = 'bird';
        this.bird2        = 'How absurd to swallow a bird!\n';
        this.cat1         = 'cat';
        this.cat2         = 'Imagine that, to swallow a cat!\n';
        this.dog1         = 'dog';
        this.dog2         = 'What a hog, to swallow a dog!\n';
        this.goat1        = 'goat';
        this.goat2        = 'Just opened her throat and swallowed a goat!\n';
        this.cow1         = 'cow';
        this.cow2         = 'I don\'t know how she swallowed a cow!\n';
        this.horse        = 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n';
        this.stdEnding    = 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside ' +
                            'her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the ' +
                            'fly. Perhaps she\'ll die.\n';
    }

    verse(input){

        let answer = '';

        input === 8 ? answer += this.horse :
        input === 7 ? answer += this.iKnow + this.cow1 + '.\n' + this.cow2 + this.sheSwallowed + this.cow1 +
                                this.toCatch + this.goat1 + '.\n' + this.sheSwallowed + this.goat1 +
                                this.toCatch + this.dog1 + '.\n' + this.sheSwallowed + this.dog1 +
                                this.toCatch + this.cat1 + '.\n' + this.sheSwallowed + this.cat1 + this.toCatch +
                                this.bird1 + '.\n' + this.stdEnding :
        input === 6 ? answer += this.iKnow + this.goat1 + '.\n' + this.goat2 + this.sheSwallowed + this.goat1 +
                                this.toCatch + this.dog1 + '.\n' + this.sheSwallowed + this.dog1 +
                                this.toCatch + this.cat1 + '.\n' + this.sheSwallowed + this.cat1 + this.toCatch +
                                this.bird1 + '.\n' + this.stdEnding :
        input === 5 ? answer += this.iKnow + this.dog1 + '.\n' + this.dog2 + this.sheSwallowed + this.dog1 +
                                this.toCatch + this.cat1 + '.\n' + this.sheSwallowed + this.cat1 + this.toCatch +
                                this.bird1 + '.\n' + this.stdEnding :
        input === 4 ? answer += this.iKnow + this.cat1 + '.\n' + this.cat2 + this.sheSwallowed + this.cat1 +
                                this.toCatch + this.bird1 + '.\n' + this.stdEnding :
        input === 3 ? answer += this.iKnow + this.bird1 + '.\n' + this.bird2 + this.stdEnding :
        input === 2 ? answer += this.iKnow + this.spider1 + '.\n' + this.spider2 + this.stdEnding.slice(93) :
        input === 1 ? answer += this.iKnow + this.fly1 + '.' + this.fly2 :
                      answer += '';
        return answer;
    }

    verses(start, finish){

        let answer = '';

        for(let i = start; i <= finish; i++){
            answer += this.verse(i) + '\n';
        }
        return answer;
    }
}

module.exports = FoodChain;

