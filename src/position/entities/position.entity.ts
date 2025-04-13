import { Player } from "src/player/entities/player.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('position')
export class Position {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToMany(() => Player, player => player.position)
    players: Player[];
}
