import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Game } from './game.entity';

@Entity()
export class Own {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Game)
  game: Game;

  @Column({ type: 'datetime' })
  date_added: Date;
}