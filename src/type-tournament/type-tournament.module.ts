import { Module } from '@nestjs/common';
import { TypeTournamentService } from './type-tournament.service';
import { TypeTournamentController } from './type-tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeTournament } from './entities/type-tournament.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TypeTournament])],
  controllers: [TypeTournamentController],
  providers: [TypeTournamentService],
})
export class TypeTournamentModule {}
