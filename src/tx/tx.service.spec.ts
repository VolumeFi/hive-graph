import { Test, TestingModule } from '@nestjs/testing'
import { getLoggerToken } from 'nestjs-pino'
import { getTerraToken } from 'nestjs-terra'
import { TxService } from './tx.service'

describe('TxService', () => {
  let service: TxService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TxService,
        {
          provide: getLoggerToken(TxService.name),
          useValue: {
            error: jest.fn(),
          },
        },
        {
          provide: getTerraToken(),
          useValue: {},
        },
      ],
    }).compile()

    service = module.get<TxService>(TxService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
