import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  game_id: number;

  @Column()
  game_title: string;

  @Column({ type: 'date' })
  game_release_date: Date;

  @Column()
  game_developer: string;

  @Column()
  game_api_source: string;
}