import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from './entities/sport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportService {
  constructor(
    @InjectRepository(Sport)
    private readonly sportRepository: Repository<Sport>,
  ) {}
  create(createSportDto: CreateSportDto) {
    const newSport = this.sportRepository.create(createSportDto);
    return this.sportRepository.save(newSport);
  }

  findAll() {
    return `This action returns all sport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sport`;
  }

  update(id: number, updateSportDto: UpdateSportDto) {
    return `This action updates a #${id} sport`;
  }

  remove(id: number) {
    return `This action removes a #${id} sport`;
  }
}
