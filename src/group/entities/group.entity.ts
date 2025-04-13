import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  key: string;
  @Column({
    name: 'time_game',
  })
  timeGame: number;
  @Column({
    name: 'day_week',
  })
  dayWeek: string;

  @OneToMany(() => Tournament, tournament => tournament.group)
  tournaments: Tournament[];
}
