import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TournamentTeamsService } from './tournament-teams.service';
import { CreateTournamentTeamDto } from './dto/create-tournament-team.dto';
import { UpdateTournamentTeamDto } from './dto/update-tournament-team.dto';

@Controller('tournament-teams')
export class TournamentTeamsController {
  constructor(private readonly tournamentTeamsService: TournamentTeamsService) {}

  @Post()
  create(@Body() createTournamentTeamDto: CreateTournamentTeamDto) {
    return this.tournamentTeamsService.create(createTournamentTeamDto);
  }

  @Get()
  findAll() {
    return this.tournamentTeamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentTeamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTournamentTeamDto: UpdateTournamentTeamDto) {
    return this.tournamentTeamsService.update(+id, updateTournamentTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentTeamsService.remove(+id);
  }
}
