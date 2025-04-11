import { Liga } from 'src/liga/entities/liga.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('season')
export class Season {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  dateStart: Date;
  @Column()
  dateEnd: Date;
  weeksDuration: number;
  @Column()
  numberTeams: number;
  @ManyToOne(() => Liga, (liga) => liga.seasons)
  liga: Liga;
}
