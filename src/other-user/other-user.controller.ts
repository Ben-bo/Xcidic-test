import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { OtherUserService } from './other-user.service';
import { CreateOtherUserDto } from './dto/create-other-user.dto';
import { UpdateOtherUserDto } from './dto/update-other-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserParams } from './dto/user.params.dto';

import { Prisma } from '@prisma/client';
import { OtherUser } from './entities/other-user.entity';
import { ResponseTimeDecorators } from 'src/common/costume/decorators';

@ApiTags('User')
@Controller('other-user')
export class OtherUserController {
  constructor(private readonly otherUserService: OtherUserService) {}

  @Post()
  async create(@Body() createOtherUserDto: CreateOtherUserDto) {
    return await this.otherUserService.create(createOtherUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Query() params: UserParams) {
    return await this.otherUserService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otherUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOtherUserDto: UpdateOtherUserDto,
  ) {
    return this.otherUserService.update(+id, updateOtherUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otherUserService.remove(+id);
  }
}
