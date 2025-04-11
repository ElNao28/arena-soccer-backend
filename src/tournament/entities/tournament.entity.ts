import { Category } from 'src/categories/entities/category.entity';
import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { Season } from 'src/season/entities/season.entity';
import { Status } from 'src/status/entities/status.entity';
import { TournamentTeam } from 'src/tournament-teams/entities/tournament-team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tournament')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  typeTournament: string;
  @Column()
  limitRegister: Date;
  @Column()
  statusId: number;

  @OneToOne(() => Season)
  @JoinColumn()
  season: Season;

  @ManyToOne(() => Category, (category) => category.tournaments)
  category: Category;
  @ManyToOne(() => Status, (status) => status.tournament)
  status: Status;

  @OneToMany(() => Jornada, (jornada) => jornada.tournament)
  jornadas: Jornada[];

  @OneToMany(() => TournamentTeam, (tournamentTeam) => tournamentTeam.tournament)
  tournamentTeams: TournamentTeam[];
}
