const Companies = [
  {
    id: 'ALR',
    name: 'ALIOR'

  },
  {
    id: 'ACP',
    name: 'ASSECOPOL',


  },
  {
    id: 'BZW',
    name: 'BZWBK',
    

  },
  {
    id: 'CCC',
    name: 'CCC',
    

  },
  {
    id: 'CPS',
    name: 'CYFRPLSAT',
    

  },
  {
    id: 'ENA',
    name: 'ENEA',
    

  },
  {
    id: 'ENG',
    name: 'ENERGA',
    

  },
  {
    id: 'EUR',
    name: 'EUROCASH',
    

  },
  {
    id: 'KGH',
    name: 'KGHM',
    

  },
  {
    id: 'LTS',
    name: 'LOTOS',
    

  },
  {
    id: 'LPP',
    name: 'LPP',
    

  },
  {
    id: 'MBK',
    name: 'MBANK',
    

  },
  {
    id: 'OPL',
    name: 'ORANGEPL',
    

  },
  {
    id: 'PEO',
    name: 'PEKAO',
    

  },
  {
    id: 'PGE',
    name: 'PGE',
    

  },
  {
    id: 'PGN',
    name: 'PGNIG',
    

  },
  {
    id: 'PKN',
    name: 'PKNORLEN',
    

  },
  {
    id: 'PKO',
    name: 'PKOBP',
    

  },
  {
    id: 'PZU',
    name: 'PZU',
    

  },
  {
    id: 'TPE',
    name: 'TAURONPE',
    

  }
].map(
  item => ({
    ...item,
    prices: [Math.floor(Math.random() * 10)],//, Math.round(Math.random() * 10),Math.round(Math.random() * 10),Math.round(Math.random() * 10)]
  })
)

export default Companies