import { Entity, ManyToOne, JoinColumn, Column, PrimaryColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Event } from './event.entity';

@Entity('preferences')
export class Preference {
    @PrimaryColumn({ name: 'user_id' })
    userId: number;

    @PrimaryColumn({ name: 'event_id' })
    eventId: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Event, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'event_id' })
    event: Event;

    @Column({ name: 'is_enabled', type: 'boolean', default: true })
    isEnabled: boolean;
}
