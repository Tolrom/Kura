import { Entity, ManyToOne } from 'typeorm';
import { Game } from './game.entity';
import { Platform } from './platform.entity';

@Entity()
export class Run {
  @ManyToOne(() => Game)
  game: Game;

  @ManyToOne(() => Platform)
  platform: Platform;
}