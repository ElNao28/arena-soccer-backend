import { Injectable } from '@nestjs/common';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Season } from './entities/season.entity';
import { Repository } from 'typeorm';
import { Liga } from '../liga/entities/liga.entity';

@Injectable()
export class SeasonService {
  constructor(
    @InjectRepository(Season)
    private readonly seasonRepository: Repository<Season>,
    @InjectRepository(Liga)
    private readonly ligaRepository: Repository<Liga>,
  ) {}
  async create(createSeasonDto: CreateSeasonDto) {
    const { idLiga, ...season } = createSeasonDto;
    const foundLiga = await this.ligaRepository.findOne({
      where: { id: idLiga },
    });
    const newSeason = this.seasonRepository.create({
      liga:foundLiga,
      ...season,
    });
    return this.seasonRepository.save(newSeason);
  }

  findAll() {
    return `This action returns all season`;
  }

  findOne(id: number) {
    return `This action returns a #${id} season`;
  }

  update(id: number, updateSeasonDto: UpdateSeasonDto) {
    return `This action updates a #${id} season`;
  }

  remove(id: number) {
    return `This action removes a #${id} season`;
  }
}
