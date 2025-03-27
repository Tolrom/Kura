import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: true })
  user_email: string;

  @Column()
  user_name: string;

  @Column()
  user_password: string;

  @Column()
  user_xp: number;

  @Column({ default: false })
  is_admin: boolean;

  @Column({ default: false })
  is_private: boolean;

  @Column({ type: 'datetime' })
  date_joined: Date;
}