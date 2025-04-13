import { Game } from 'src/games/entities/game.entity';
import { Player } from 'src/player/entities/player.entity';
import { TournamentTeam } from 'src/tournament-teams/entities/tournament-team.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({})
  contact: string;
  @Column()
  code: string;
  @Column()
  pathShield: string;


  @OneToMany(() => Player, player => player.team)
  players: Player[];
  
  @OneToMany(() => TournamentTeam, (tournamentTeam) => tournamentTeam.team)
  tournamentTeams: TournamentTeam[];

  @OneToMany(() => Game, (game) => game.teamOne)
  gamesOne: Game[];
  @OneToMany(() => Game, (game) => game.teamTwo)
  gamesTwo: Game[];
}
