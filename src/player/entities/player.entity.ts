import { Position } from 'src/position/entities/position.entity';
import { Sport } from 'src/sport/entities/sport.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('player')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sport, (sport) => sport.players)
  sport: Sport;

  @ManyToOne(() => Position, (position) => position.players)
  position: Position;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
