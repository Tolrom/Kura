import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Game } from './game.entity';
import { Tag } from './tag.entity';

@Entity()
export class Play {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Game)
  game: Game;

  @ManyToOne(() => Tag)
  tag: Tag;

  @Column({ type: 'decimal', precision: 6, scale: 1 })
  playtime: number;

  @Column()
  achievements: number;
}