import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LigaModule } from './liga/liga.module';
import { SeasonModule } from './season/season.module';
import { TournamentModule } from './tournament/tournament.module';
import { CategoriesModule } from './categories/categories.module';
import { StatusModule } from './status/status.module';
import { JornadasModule } from './jornadas/jornadas.module';
import { TeamsModule } from './teams/teams.module';
import { GamesModule } from './games/games.module';
import { TournamentTeamsModule } from './tournament-teams/tournament-teams.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'awade123*',
      database: 'arena-test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LigaModule,
    SeasonModule,
    TournamentModule,
    CategoriesModule,
    StatusModule,
    JornadasModule,
    TeamsModule,
    GamesModule,
    TournamentTeamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
