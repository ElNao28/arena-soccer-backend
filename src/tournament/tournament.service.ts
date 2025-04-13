import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Repository } from 'typeorm';
import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { TournamentTeam } from 'src/tournament-teams/entities/tournament-team.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Game } from 'src/games/entities/game.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Status } from 'src/status/entities/status.entity';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
    @InjectRepository(Jornada)
    private readonly jornadaRepository: Repository<Jornada>,
    @InjectRepository(TournamentTeam)
    private readonly tournamentTeamRepository: Repository<TournamentTeam>,
    @InjectRepository(Team)
    private readonly teamTeamRepository: Repository<Team>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}
  async create(createTournamentDto: CreateTournamentDto) {
    const { categoryId, teams, ...tournament } = createTournamentDto;
    const foundCategory = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });
    const foundStatus = await this.statusRepository.findOne({
      where: { id: 1 },
    });

    const newTournament = this.tournamentRepository.create({
      // category: foundCategory,
      // status: foundStatus,
      // ...tournament,
    });

    const saveTournament = await this.tournamentRepository.save(newTournament);

    for (let team of teams) {
      const foundTeam = await this.teamTeamRepository.findOne({
        where: { id: team },
      });
      const newTournamentTeam = this.tournamentTeamRepository.create({
        tournament: saveTournament,
        team: foundTeam,
      });
      await this.tournamentTeamRepository.save(newTournamentTeam);
    }
    await this.createJornadas(teams, foundStatus, saveTournament);
    return {
      message: 'Tournament created successfully',
    };
  }

  private async createJornadas(
    teams: number[],
    foundStatus: Status,
    tournamet: Tournament,
  ) {
    const totalJornadas = teams.length - 1;
    const numTeams = teams.length;
    const teamIds = [...teams];

    for (let i = 0; i < totalJornadas; i++) {
      const newJornada = this.jornadaRepository.create({
        name: `Jornada ${i + 1}`,
        status: foundStatus,
        tournament: tournamet,
      });
      const saveJornada = await this.jornadaRepository.save(newJornada);
      for (let j = 0; j < numTeams / 2; j++) {
        const teamA = await this.teamTeamRepository.findOne({
          where: {
            id: teamIds[j],
          },
        });
        const teamB = await this.teamTeamRepository.findOne({
          where: {
            id: teamIds[numTeams - 1 - j],
          },
        });

        const newGame = this.gameRepository.create({
          dayGame: new Date(),
          title: `Jornada ${i + 1} - Partido ${j + 1}`,
          schedule: new Date(),
          jornada: saveJornada,
          status: foundStatus,
          teamOne: teamA,
          teamTwo: teamB,
        });
        await this.gameRepository.save(newGame);
      }

      const fixed = teamIds[0]; // el primer equipo se mantiene
      const rotated = teamIds.slice(1); // se rota el resto
      rotated.unshift(rotated.pop()!); // mueve el último al frente
      teamIds.splice(0, teamIds.length, fixed, ...rotated); // actualiza el array original
    }
  }

  findAll() {
    return `This action returns all tournament`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tournament`;
  }

  update(id: number, updateTournamentDto: UpdateTournamentDto) {
    return `This action updates a #${id} tournament`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournament`;
  }
}
