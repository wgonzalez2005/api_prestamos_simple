import { PartialType } from '@nestjs/mapped-types';
import { CreateRutascobradoreDto } from './create-rutascobradore.dto';

export class UpdateRutascobradoreDto extends PartialType(CreateRutascobradoreDto) {}
