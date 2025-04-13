import { Injectable } from '@nestjs/common';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancha } from './entities/cancha.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CanchaService {
  constructor(
    @InjectRepository(Cancha)
    private readonly canchaRepository: Repository<Cancha>,
  ) {}
  create(createCanchaDto: CreateCanchaDto) {
    const newCancha = this.canchaRepository.create(createCanchaDto);
    return this.canchaRepository.save(newCancha);
  }

  findAll() {
    return `This action returns all cancha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancha`;
  }

  update(id: number, updateCanchaDto: UpdateCanchaDto) {
    return `This action updates a #${id} cancha`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancha`;
  }
}
