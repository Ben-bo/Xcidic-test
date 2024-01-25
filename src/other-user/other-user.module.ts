import { Module } from '@nestjs/common';
import { OtherUserService } from './other-user.service';
import { OtherUserController } from './other-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [OtherUserController],
  providers: [OtherUserService],
})
export class OtherUserModule {}
