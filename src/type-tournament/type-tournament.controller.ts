import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeTournamentService } from './type-tournament.service';
import { CreateTypeTournamentDto } from './dto/create-type-tournament.dto';
import { UpdateTypeTournamentDto } from './dto/update-type-tournament.dto';

@Controller('type-tournament')
export class TypeTournamentController {
  constructor(private readonly typeTournamentService: TypeTournamentService) {}

  @Post()
  create(@Body() createTypeTournamentDto: CreateTypeTournamentDto) {
    return this.typeTournamentService.create(createTypeTournamentDto);
  }

  @Get()
  findAll() {
    return this.typeTournamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeTournamentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeTournamentDto: UpdateTypeTournamentDto) {
    return this.typeTournamentService.update(+id, updateTypeTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeTournamentService.remove(+id);
  }
}
