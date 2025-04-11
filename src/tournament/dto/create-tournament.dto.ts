export class CreateTournamentDto {
    name:string;
    limitRegister:Date;
    typeTournament:string;
    teams: number[];
    seasonId:number;
    categoryId:number;
    statusId?:number;
}
