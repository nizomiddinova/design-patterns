import { Copyable } from "./Copyable";

export class GameCharacter implements Copyable {
    private id: number;
    private name: string;
    private level: number;
    private weapon: string;

    constructor(id: number, name: string, level: number, weapon: string) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.weapon = weapon;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getLevel(): number {
        return this.level;
    }

    getWeapon(): string {
        return this.weapon;
    }

    setId(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setLevel(level: number): void {
        this.level = level;
    }

    setWeapon(weapon: string): void {
        this.weapon = weapon;
    }

    clone(): this {
        return new GameCharacter(
            this.id,
            this.name,
            this.level,
            this.weapon
        ) as this;
    }

    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}, Level: ${this.level}, Weapon: ${this.weapon}`;
    }
}