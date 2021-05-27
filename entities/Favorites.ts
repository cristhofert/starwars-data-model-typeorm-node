import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, 
    BaseEntity, JoinTable, OneToMany
} from 'typeorm';

import { User } from "./User"
import { Planet } from "./Planets"
import { Character } from "./Characters"
@Entity()
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @ManyToOne(() => Planet, planet => planet.id)
    planet: Planet;

    @ManyToOne(() => Character, character => character.id)
    character: Character;

}