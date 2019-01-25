import { Novice } from "./_novice.js";

class Guerrier extends Novice {
    constructor(nom, pV, pA, pR ){
        super(nom, pV, pA) ;
         this.pR = pR ;
    }
}

export {Guerrier} ;