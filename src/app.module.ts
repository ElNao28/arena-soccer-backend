import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LigaModule } from './liga/liga.module';
import { TournamentModule } from './tournament/tournament.module';
import { CategoriesModule } from './categories/categories.module';
import { StatusModule } from './status/status.module';
import { JornadasModule } from './jornadas/jornadas.module';
import { TeamsModule } from './teams/teams.module';
import { GamesModule } from './games/games.module';
import { TournamentTeamsModule } from './tournament-teams/tournament-teams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SportModule } from './sport/sport.module';
import { PlayerModule } from './player/player.module';
import { PositionModule } from './position/position.module';
import { CanchaModule } from './cancha/cancha.module';
import { TypeTournamentModule } from './type-tournament/type-tournament.module';
import { GroupModule } from './group/group.module';

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
    TournamentModule,
    CategoriesModule,
    StatusModule,
    JornadasModule,
    TeamsModule,
    GamesModule,
    TournamentTeamsModule,
    UsersModule,
    SportModule,
    PlayerModule,
    PositionModule,
    CanchaModule,
    TypeTournamentModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
