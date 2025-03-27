import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn({name: 'platform_id'})
  id: number;

  @Column({name: 'platform_name'})
  platformName: string;
}
