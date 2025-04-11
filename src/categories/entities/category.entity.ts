import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(()=> Tournament, tournament => tournament.category)
  tournaments:Tournament[];
}
