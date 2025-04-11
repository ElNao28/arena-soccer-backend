import { Injectable } from '@nestjs/common';
import { CreateTournamentTeamDto } from './dto/create-tournament-team.dto';
import { UpdateTournamentTeamDto } from './dto/update-tournament-team.dto';

@Injectable()
export class TournamentTeamsService {
  create(createTournamentTeamDto: CreateTournamentTeamDto) {
    return 'This action adds a new tournamentTeam';
  }

  findAll() {
    return `This action returns all tournamentTeams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tournamentTeam`;
  }

  update(id: number, updateTournamentTeamDto: UpdateTournamentTeamDto) {
    return `This action updates a #${id} tournamentTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournamentTeam`;
  }
}
