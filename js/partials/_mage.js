import { Novice } from "./_novice.js";


class Mage extends Novice {
    constructor(nom, pV, pA, mana) {
        super(nom, pV, pA) ;
        this.mana= mana ;
    }
}

export {Mage} ;