import { Player } from "src/player/entities/player.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('sport')
export class Sport {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToMany(() => Player, player => player.sport)
    players: Player[];
}
