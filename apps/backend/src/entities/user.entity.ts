import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';
  
@Entity('users')   
export class User{
    
      @PrimaryGeneratedColumn()
      id: number;

      @Column('varchar', { length: 50 })
      email: string;

      @Column('varchar', { length: 50 })
      name: string;

      @Column('varchar', { length: 255 })
      password: string;

      @Column('int', { name: 'user_xp' })
      userXp: number;
    
      @Column('boolean', { name: 'is_admin' })
      isAdmin: boolean;

      @Column('boolean', { name: 'is_private' })
      isPrivate: boolean;  

      @CreateDateColumn()
      @Column({ type: 'timestamp', name: 'date_joined' })
      dateJoined: Date;
}
  