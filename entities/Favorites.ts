import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn,
    BaseEntity, JoinTable
} from 'typeorm';

import { User } from "./User"
import { Planets } from "./Planets"
import { Characters } from "./Characters"
@Entity()
export class Favorites extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user_id: User;

    @OneToOne(() => Planets)
    @JoinColumn()
    planet_id: Planets;

    @OneToOne(() => Characters)
    @JoinColumn()
    character_id: Characters;


}