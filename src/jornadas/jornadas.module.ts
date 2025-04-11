import { Module } from '@nestjs/common';
import { JornadasService } from './jornadas.service';
import { JornadasController } from './jornadas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jornada } from './entities/jornada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jornada])],
  controllers: [JornadasController],
  providers: [JornadasService],
})
export class JornadasModule {}
