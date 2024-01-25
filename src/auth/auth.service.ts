import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: createAuthDto.email,
      },
    });
    if (!user) throw new NotFoundException('user not found');
    const isMatch = await bcrypt.compare(createAuthDto.password, user.password);

    if (!isMatch) throw new BadRequestException('wrong password');
    const payload = { name: user.name };
    const token = await this.jwt.signAsync(payload, {
      privateKey: 'test',
    });
    return { token };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
