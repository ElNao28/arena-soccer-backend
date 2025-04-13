import { Category } from 'src/categories/entities/category.entity';
import { Group } from 'src/group/entities/group.entity';
import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { Liga } from 'src/liga/entities/liga.entity';
import { Status } from 'src/status/entities/status.entity';
import { TournamentTeam } from 'src/tournament-teams/entities/tournament-team.entity';
import { TypeTournament } from 'src/type-tournament/entities/type-tournament.entity';
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
  @Column({
    name: 'start_date',
  })
  startDate: Date;
  @Column({
    name: 'end_date',
  })
  endDate: Date;
  @Column({
    name: 'number_weeks',
  })
  numberWeeks: number;
  @Column()
  limitRegister: Date;
  @Column()
  statusId: number;

  @ManyToOne(() => Category, (category) => category.tournaments)
  category: Category;
  @ManyToOne(() => Status, (status) => status.tournament)
  status: Status;
  @ManyToOne(() => Liga, (liga) => liga.tournaments)
  liga: Liga;
  @ManyToOne(
    () => TypeTournament,
    (typeTournament) => typeTournament.tournaments,
  )
  typeTournament: TypeTournament;

  @ManyToOne(() => Group, (group) => group.tournaments)
  group: Group;

  @OneToMany(() => Jornada, (jornada) => jornada.tournament)
  jornadas: Jornada[];

  @OneToMany(
    () => TournamentTeam,
    (tournamentTeam) => tournamentTeam.tournament,
  )
  tournamentTeams: TournamentTeam[];
}
