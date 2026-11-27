import { GameCharacter } from "./GameCharacter";
import { CharacterFactory } from "./CharacterFactory";

export class GameRunner {
    static main(): void {

        const original = new GameCharacter(
            1,
            "Warrior",
            10,
            "Sword"
        );

        const factory = new CharacterFactory(original);

        const clone1 = factory.cloneCharacter();
        const clone2 = factory.cloneCharacter();

        clone1.setName("Dark Warrior");
        clone1.setLevel(15);
        clone1.setWeapon("Axe");

        clone2.setName("Fire Mage");
        clone2.setLevel(20);
        clone2.setWeapon("Magic Staff");

        console.log("ORIGINAL CHARACTER:");
        console.log(original.toString());

        console.log("\nCLONE 1:");
        console.log(clone1.toString());

        console.log("\nCLONE 2:");
        console.log(clone2.toString());

        console.log("\nOBJECT COMPARISON:");
        console.log("Original == Clone 1:", original === clone1);
        console.log("Original == Clone 2:", original === clone2);
        console.log("Clone 1 == Clone 2:", clone1 === clone2);
    }
}

GameRunner.main();