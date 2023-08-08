import { PartialType } from '@nestjs/mapped-types';
import { CreateCobradoreDto } from './create-cobradore.dto';

export class UpdateCobradoreDto extends PartialType(CreateCobradoreDto) {}
