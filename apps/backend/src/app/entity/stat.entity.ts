import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from '../../game/entities/game.entity';

@Entity('stats')
export class Stat {
    @PrimaryGeneratedColumn({ name: 'stat_id' })
    id: number;

    @Column({ name: 'playtime', type: 'int' })
    playtime: number;

    @Column({ name: 'achievements', type: 'int' })
    achievements: number;

    @Column({ name: 'verified', type: 'tinyint', default: 0 })
    verified: boolean;

    @Column({ name: 'date_added', type: 'datetime' })
    dateAdded: Date;

    @ManyToOne(() => Game, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'game_id' })
    game: Game;
}