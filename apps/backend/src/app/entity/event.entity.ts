import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preference } from './preference.entity';
import { Notification } from './notification.entity';

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn({ name: 'event_id' })
    id: number;

    @Column({ name: 'description', type: 'text' })
    description: string;

    @OneToMany(() => Preference, (preference) => preference.event)
    preferences: Preference[];

    @OneToMany(() => Notification, (notification) => notification.event)
    notifications: Notification[];
}