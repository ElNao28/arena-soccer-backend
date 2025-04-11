import { Game } from 'src/games/entities/game.entity';
import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => Tournament, (tournament) => tournament.status)
  tournament: Tournament[];
  @OneToMany(() => Jornada, (jornada) => jornada.status)
  jornada: Jornada[];
  @OneToMany(() => Game, (game) => game.status)
  game: Jornada[];
}
