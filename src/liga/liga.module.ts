import { Module } from '@nestjs/common';
import { LigaService } from './liga.service';
import { LigaController } from './liga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Liga } from './entities/liga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Liga])],
  controllers: [LigaController],
  providers: [LigaService],
})
export class LigaModule {}
