import { Test, TestingModule } from '@nestjs/testing';
import { OtherUserService } from './other-user.service';

describe('OtherUserService', () => {
  let service: OtherUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherUserService],
    }).compile();

    service = module.get<OtherUserService>(OtherUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
