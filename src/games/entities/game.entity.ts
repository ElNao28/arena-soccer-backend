import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { Status } from 'src/status/entities/status.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  dayGame: Date;
  @Column()
  schedule: Date;

  @ManyToOne(() => Jornada, (jornada) => jornada.games)
  jornada: Jornada;

  @ManyToOne(() => Status, (status) => status.game)
  status: Status;

  @ManyToOne(() => Team, (team) => team.gamesOne)
  teamOne: Team;
  @ManyToOne(() => Team, (team) => team.gamesTwo)
  teamTwo: Team;
}
