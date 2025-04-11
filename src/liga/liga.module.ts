import { Module } from '@nestjs/common';
import { LigaService } from './liga.service';
import { LigaController } from './liga.controller';
import { Jornada } from 'src/jornadas/entities/jornada.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Jornada])],
  controllers: [LigaController],
  providers: [LigaService],
})
export class LigaModule {}
