import { Entity, ManyToOne } from 'typeorm';
import { Game } from './game.entity';
import { Genre } from './genre.entity';

@Entity()
export class Belong {
  @ManyToOne(() => Game)
  game: Game;

  @ManyToOne(() => Genre)
  genre: Genre;
}