import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Season } from './entities/season.entity';
import { Liga } from 'src/liga/entities/liga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Season,Liga])],
  controllers: [SeasonController],
  providers: [SeasonService],
})
export class SeasonModule {}
