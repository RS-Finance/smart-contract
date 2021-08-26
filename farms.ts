import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'KSF',
    lpAddresses: {
      321: '0x092c51b4736dee895eb5b64892dc83b230f02d82',
      322: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wkcs,
  },
  {
    pid: 1,
    lpSymbol: 'KSF-KCS LP',
    lpAddresses: {
      321: '0x3d15ac92c270b9c3c3bec77fb1f0f66f138b27d2',
      322: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.ksf,
    quoteToken: tokens.wkcs,
  },
  {
    pid: 11,
    lpSymbol: 'RS-KSF LP',
    lpAddresses: {
      321: '0x24806dc6bfe905292093e095d7d7045d8ca20698',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.rs,
    quoteToken: tokens.ksf,
  },
  {
    pid: 2,
    lpSymbol: 'USDT-KCS LP',
    lpAddresses: {
      321: '0x1116b80fd0ff9a980dcfbfa3ed477bfa6bbd6a85',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.usdt,
    quoteToken: tokens.wkcs,
  },
  {
    pid: 3,
    lpSymbol: 'KSF-USDT LP',
    lpAddresses: {
      321: '0xf9cFabd904BFD807772Bd5Cf9802024d0Bc93BFf',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.ksf,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-KSF LP',
    lpAddresses: {
      321: '0xd1986c80cac4dd55add6c4b30d19b4b0189ccacd',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.ksf,
  },
  {
    pid: 7,
    lpSymbol: 'USDC-KSF LP',
    lpAddresses: {
      321: '0xcde3aa78955023408bf859105795c869a087ea4b',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.usdc,
    quoteToken: tokens.ksf,
  },
  {
    pid: 6,
    lpSymbol: 'BNB-KSF LP',
    lpAddresses: {
      321: '0x27cf7a644fe5b7b4c0a35d258c88b42a9f80d101',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.bnb,
    quoteToken: tokens.ksf,
  },
  {
    pid: 8,
    lpSymbol: 'BUSD-KCS LP',
    lpAddresses: {
      321: '0x26d94a2e3bd703847c3be3c30ead42b926b427c2',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wkcs,
  },
  {
    pid: 5,
    lpSymbol: 'KAFE-KSF LP',
    lpAddresses: {
      321: '0xc4993ce08e2e5aef24ac1c4342716700f419e362',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.kafe,
    quoteToken: tokens.ksf,
  },
  {
    pid: 9,
    lpSymbol: 'KOFFEE-KSF LP',
    lpAddresses: {
      321: '0xAc267294C1cfaEECa4F23CDF1221AFD6c92683aB',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.koffee,
    quoteToken: tokens.ksf,
  },
  {
    pid: 10,
    lpSymbol: 'KUS-KSF LP',
    lpAddresses: {
      321: '0xccb0f34594a0ec4e37073360ee60d29ae2d5f7f2',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.kus,
    quoteToken: tokens.ksf,
  },

  {
    pid: 13,
    lpSymbol: 'RS',
    lpAddresses: {
      321: '0x1bbd57143428452a4deb42519391a0a436481c8e',
      322: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.rs,
    quoteToken: tokens.ksf,
  },
  
]
export default farms
