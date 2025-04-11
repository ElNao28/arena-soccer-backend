import { Liga } from 'src/liga/entities/liga.entity';
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
  @Column()
  weeksDuration: number;
  @Column()
  numberTeams: number;
  @ManyToOne(() => Liga, (liga) => liga.seasons)
  liga: Liga;
}
