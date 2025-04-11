import { Injectable } from '@nestjs/common';
import { CreateLigaDto } from './dto/create-liga.dto';
import { UpdateLigaDto } from './dto/update-liga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Liga } from './entities/liga.entity';

@Injectable()
export class LigaService {
  constructor(
    @InjectRepository(Liga) private readonly ligaRepository: Repository<Liga>,
  ) {}
  create(createLigaDto: CreateLigaDto) {
    try {
      const newLiga = this.ligaRepository.create(createLigaDto);
      return this.ligaRepository.save(newLiga);
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    return `This action returns all liga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liga`;
  }

  update(id: number, updateLigaDto: UpdateLigaDto) {
    return `This action updates a #${id} liga`;
  }

  remove(id: number) {
    return `This action removes a #${id} liga`;
  }
}
