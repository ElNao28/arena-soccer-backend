import { Test, TestingModule } from '@nestjs/testing';
import { TournamentTeamsController } from './tournament-teams.controller';
import { TournamentTeamsService } from './tournament-teams.service';

describe('TournamentTeamsController', () => {
  let controller: TournamentTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentTeamsController],
      providers: [TournamentTeamsService],
    }).compile();

    controller = module.get<TournamentTeamsController>(TournamentTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
