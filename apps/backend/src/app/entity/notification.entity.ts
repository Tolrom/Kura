import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Event } from './event.entity';

@Entity('notifications')
export class Notification {
    @PrimaryGeneratedColumn({ name: 'notification_id' })
    id: number;

    @Column({ name: 'event_date', type: 'datetime' })
    eventDate: Date;

    @Column({ name: 'is_seen', type: 'tinyint', default: 0 })
    isSeen: boolean;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Event, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'event_id' })
    event: Event;
}