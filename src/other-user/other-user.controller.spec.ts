import { Test, TestingModule } from '@nestjs/testing';
import { OtherUserController } from './other-user.controller';
import { OtherUserService } from './other-user.service';

describe('OtherUserController', () => {
  let controller: OtherUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherUserController],
      providers: [OtherUserService],
    }).compile();

    controller = module.get<OtherUserController>(OtherUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
