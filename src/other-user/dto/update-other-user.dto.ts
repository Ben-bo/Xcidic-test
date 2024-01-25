import { PartialType } from '@nestjs/swagger';
import { CreateOtherUserDto } from './create-other-user.dto';

export class UpdateOtherUserDto extends PartialType(CreateOtherUserDto) {}
