import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    id: number;

    @Column({ name: 'user_email', type: 'varchar', length: 255 })
    email: string;

    @Column({ name: 'user_name', type: 'varchar', length: 50 })
    username: string;

    @Column({ name: 'user_password', type: 'varchar', length: 255 })
    password: string;

    @Column({ name: 'user_xp', type: 'int', default: 0 })
    xp: number;

    @Column({ name: 'is_admin', type: 'tinyint', default: 0 })
    isAdmin: boolean;

    @Column({ name: 'is_private', type: 'tinyint', default: 0 })
    isPrivate: boolean;

    @Column({ name: 'date_joined', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    dateJoined: Date;
}