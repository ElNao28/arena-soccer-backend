import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeTournamentDto } from './create-type-tournament.dto';

export class UpdateTypeTournamentDto extends PartialType(CreateTypeTournamentDto) {}
