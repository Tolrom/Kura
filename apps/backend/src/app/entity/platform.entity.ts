import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  platform_id: number;

  @Column()
  platform_name: string;
}
