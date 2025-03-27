import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn({name: 'genre_id'})
  id: number;

  @Column({name: 'genre_name'})
  genreName: string;
}