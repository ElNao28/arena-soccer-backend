import { Player } from 'src/player/entities/player.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'first_name',
  })
  firstName: string;
  @Column({
    name: 'middele_name',
  })
  middeleName: string;
  @Column({
    name: 'last_name',
  })
  lastName: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  phone: number;
  @Column({
    name: 'image_path',
  })
  imagePath: string;
  @Column({
    name: 'ine_posterior_path',
  })
  inePosteriorPath: string;
  @Column({
    name: 'ine_frontal_path',
  })
  ineFrontalPath: string;

  @OneToOne(() => Player)
  @JoinColumn()
  player: Player;

}
