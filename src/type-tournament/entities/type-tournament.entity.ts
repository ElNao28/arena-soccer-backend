import { Tournament } from "src/tournament/entities/tournament.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('type_tournament')
export class TypeTournament {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToMany(() => Tournament, tournament => tournament.typeTournament)
    tournaments: Tournament[];
}
