import { Module } from '@nestjs/common';
import { TournamentTeamsService } from './tournament-teams.service';
import { TournamentTeamsController } from './tournament-teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentTeam } from './entities/tournament-team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentTeam])],
  controllers: [TournamentTeamsController],
  providers: [TournamentTeamsService],
})
export class TournamentTeamsModule {}
