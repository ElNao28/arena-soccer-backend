export class CreateTournamentDto {
    name:string;
    limitRegister:Date;
    typeTournament:string;
    teams: number[];
    categoryId:number;
    statusId?:number;
}
