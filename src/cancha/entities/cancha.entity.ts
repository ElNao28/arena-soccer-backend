import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cancha')
export class Cancha {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  schedule: string;

  @OneToMany(() => Jornada, jornada => jornada.cancha)
  jornadas:Jornada
}
