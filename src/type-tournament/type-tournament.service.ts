import { Injectable } from '@nestjs/common';
import { CreateTypeTournamentDto } from './dto/create-type-tournament.dto';
import { UpdateTypeTournamentDto } from './dto/update-type-tournament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeTournament } from './entities/type-tournament.entity';

@Injectable()
export class TypeTournamentService {
  constructor(
    @InjectRepository(TypeTournament)
    private readonly typeTournamentRepository: Repository<TypeTournament>,
  ) {}
  create(createTypeTournamentDto: CreateTypeTournamentDto) {
    const typeTournament = this.typeTournamentRepository.create(
      createTypeTournamentDto,
    );
    return this.typeTournamentRepository.save(typeTournament);
  }

  findAll() {
    return `This action returns all typeTournament`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeTournament`;
  }

  update(id: number, updateTypeTournamentDto: UpdateTypeTournamentDto) {
    return `This action updates a #${id} typeTournament`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeTournament`;
  }
}
