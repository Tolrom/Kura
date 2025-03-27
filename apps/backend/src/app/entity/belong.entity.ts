import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Genre } from './genre.entity';

@Entity('belong')
export class Belong {
    @PrimaryColumn({ name: 'game_id' })
    gameId: number;

    @PrimaryColumn({ name: 'genre_id' })
    genreId: number;

    @ManyToOne(() => Game, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'game_id' })
    game: Game;

    @ManyToOne(() => Genre, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'genre_id' })
    genre: Genre;
}