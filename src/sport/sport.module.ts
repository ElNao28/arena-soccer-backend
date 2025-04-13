import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportController } from './sport.controller';
import { Sport } from './entities/sport.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Sport])],
  controllers: [SportController],
  providers: [SportService],
})
export class SportModule {}
