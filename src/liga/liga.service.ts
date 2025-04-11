import { Injectable } from '@nestjs/common';
import { CreateLigaDto } from './dto/create-liga.dto';
import { UpdateLigaDto } from './dto/update-liga.dto';

@Injectable()
export class LigaService {
  create(createLigaDto: CreateLigaDto) {
    return 'This action adds a new liga';
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
