import { Injectable } from '@nestjs/common';
import { CreateOtherUserDto } from './dto/create-other-user.dto';
import { UpdateOtherUserDto } from './dto/update-other-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserParams } from './dto/user.params.dto';
import { OtherUser } from './entities/other-user.entity';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class OtherUserService {
  constructor(private prisma: PrismaService) {}
  async create(createOtherUserDto: CreateOtherUserDto) {
    const salt = await bcrypt.genSalt(10);
    const password = createOtherUserDto.password;
    const hashedpassword = await bcrypt.hash(password, salt);
    const userInput: Prisma.UserUncheckedCreateInput = {
      ...createOtherUserDto,
      password: hashedpassword,
    };
    const user = await this.prisma.user.create({ data: userInput });
    return new OtherUser(user);
  }

  async findAll(params: UserParams) {
    const { page, perPage } = params;
    const skip = page > 0 ? perPage * (page - 1) : 0;
    const user = await this.prisma.user.findMany({
      skip,
      take: +perPage,
    });

    return user.map((_user) => new OtherUser(_user));
  }

  findOne(id: number) {
    return `This action returns a #${id} otherUser`;
  }

  update(id: number, updateOtherUserDto: UpdateOtherUserDto) {
    return `This action updates a #${id} otherUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} otherUser`;
  }
}
