import { Team } from 'src/teams/entities/team.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tournament_teams')
export class TournamentTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tournament, (tournament) => tournament.tournamentTeams)
  tournament: Tournament;

  @ManyToOne(() => Team, (team) => team.tournamentTeams)
  team: Team;
}
