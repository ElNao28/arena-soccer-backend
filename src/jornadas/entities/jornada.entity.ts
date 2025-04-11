import { Game } from 'src/games/entities/game.entity';
import { Status } from 'src/status/entities/status.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('jornadas')
export class Jornada {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  statusId: number;

  @ManyToOne(() => Tournament, (tournament) => tournament.jornadas)
  tournament: Tournament;

  @ManyToOne(() => Status, (status) => status.jornada)
  status: Status;

  @OneToMany(() => Game, game => game.jornada)
  games: Game[];
}
