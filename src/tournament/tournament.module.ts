import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { TournamentTeam } from 'src/tournament-teams/entities/tournament-team.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Game } from 'src/games/entities/game.entity';
import { Status } from 'src/status/entities/status.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament, Jornada, TournamentTeam, Team, Game, Status,Category])],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class TournamentModule {}
