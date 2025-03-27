import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stat } from '../../app/entity/stat.entity';
import { Belong } from '../../app/entity/belong.entity';
import { Run } from '../../app/entity/run.entity';

@Entity('games')
export class Game {
    @PrimaryGeneratedColumn({ name: 'game_id' })
    id: number;

    @Column({ name: 'game_title', type: 'varchar', length: 100 })
    title: string;

    @Column({ name: 'game_release_date', type: 'datetime' })
    releaseDate: Date;

    @Column({ name: 'game_developer', type: 'varchar', length: 50 })
    developer: string;

    @Column({ name: 'game_api_source', type: 'varchar', length: 255 })
    apiSource: string;

    @OneToMany(() => Stat, (stat) => stat.game)
    stats: Stat[];

    @OneToMany(() => Belong, (belong) => belong.game)
    genres: Belong[];

    @OneToMany(() => Run, (run) => run.game)
    platforms: Run[];
}