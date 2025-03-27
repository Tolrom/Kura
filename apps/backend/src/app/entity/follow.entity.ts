import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Follow {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => User)
  user_1: User;

  @Column({ type: 'datetime' })
  date_followed: Date;
}