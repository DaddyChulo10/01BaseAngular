import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public character: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000,
        },
        {
            id: uuid(),
            name: 'Goku!',
            power: 1500
        },
        {
            id: uuid(),
            name: 'Vegetta',
            power: 1450
        }
    ]


    addCharacter(character: Character): void {

        const NewCharacter: Character = { ...character, id: uuid() }

        // this.character.push(character)
        let copiaCharacter = Object.assign({}, NewCharacter)
        this.character.push(copiaCharacter);
    }


    deleteCharacterById(id: string) {
        console.log(id)
        this.character = this.character.filter(character => character.id !== id)
    }


    onDelete(index: number): void {
        this.character.splice(index, 1)
    }





    constructor() { }

}