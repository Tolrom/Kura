import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Platform } from '../../platform/entities/platform.entity';

@Entity('run')
export class Run {
    @PrimaryColumn({ name: 'game_id' })
    gameId: number;

    @PrimaryColumn({ name: 'platform_id' })
    platformId: number;

    @ManyToOne(() => Game, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'game_id' })
    game: Game;

    @ManyToOne(() => Platform, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'platform_id' })
    platform: Platform;
}