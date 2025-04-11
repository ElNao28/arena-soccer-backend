import { Test, TestingModule } from '@nestjs/testing';
import { TournamentTeamsService } from './tournament-teams.service';

describe('TournamentTeamsService', () => {
  let service: TournamentTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentTeamsService],
    }).compile();

    service = module.get<TournamentTeamsService>(TournamentTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
