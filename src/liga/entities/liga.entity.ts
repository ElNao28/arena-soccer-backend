import { Season } from 'src/season/entities/season.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ligas')
export class Liga {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  
  @OneToMany(() => Season, (season) => season.id)
  seasons: Season[];
}
