import { Novice } from "./_novice.js";


class Archer extends Novice {
    constructor(nom, pV, pA, nbreFleches) {
        super(nom, pV, pA);
        this.nbreFleches;
    }
}

export {Archer} ;