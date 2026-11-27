import { GameCharacter } from "./GameCharacter";

export class CharacterFactory {
    private prototype: GameCharacter;

    constructor(prototype: GameCharacter) {
        this.prototype = prototype;
    }

    setCharacter(character: GameCharacter): void {
        this.prototype = character;
    }

    cloneCharacter(): GameCharacter {
        return this.prototype.clone();
    }
}