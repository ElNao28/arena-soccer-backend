import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ligas')
export class Liga {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => Tournament, tournament => tournament.liga)
  tournaments: Tournament[];
}
