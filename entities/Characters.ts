import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';
  
  // import {Planet} from "./Planet"
  @Entity()
  export class Characters extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    height: string;

    @Column()
    mass: string;
  
    @Column()
    hair_color: string;
  
    @Column()
    skin_color: string;
  
    @Column()
    eye_color: string;

    @Column()
    birth_year: string;

    @Column()
    gender: string;

    @Column()
    name: string;

    @Column()
    homeworld: string;

    @Column()
    url: string;
  

  }