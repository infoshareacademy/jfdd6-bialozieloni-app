import React from 'react'
import { Table } from 'react-bootstrap'

const Companies = [
  {
    id: 'ALR',
    name: 'ALIOR'

  },
  {
    id: 'ACP',
    name: 'ASSECOPOL',
    price: Math.random() * 100

  },
  {
    id: 'BZW',
    name: 'BZWBK',
    price: Math.random() * 100

  },
  {
    id: 'CCC',
    name: 'CCC',
    price: Math.random() * 100

  },
  {
    id: 'CPS',
    name: 'CYFRPLSAT',
    price: Math.random() * 100

  },
  {
    id: 'ENA',
    name: 'ENEA',
    price: Math.random() * 100

  },
  {
    id: 'ENG',
    name: 'ENERGA',
    price: Math.random() * 100

  },
  {
    id: 'EUR',
    name: 'EUROCASH',
    price: Math.random() * 100

  },
  {
    id: 'KGH',
    name: 'KGHM',
    price: Math.random() * 100

  },
  {
    id: 'LTS',
    name: 'LOTOS',
    price: Math.random() * 100

  },
  {
    id: 'LPP',
    name: 'LPP',
    price: Math.random() * 100

  },
  {
    id: 'MBK',
    name: 'MBANK',
    price: Math.random() * 100

  },
  {
    id: 'OPL',
    name: 'ORANGEPL',
    price: Math.random() * 100

  },
  {
    id: 'PEO',
    name: 'PEKAO',
    price: Math.random() * 100

  },
  {
    id: 'PGE',
    name: 'PGE',
    price: Math.random() * 100

  },
  {
    id: 'PGN',
    name: 'PGNIG',
    price: Math.random() * 100

  },
  {
    id: 'PKN',
    name: 'PKNORLEN',
    price: Math.random() * 100

  },
  {
    id: 'PKO',
    name: 'PKOBP',
    price: Math.random() * 100

  },
  {
    id: 'PZU',
    name: 'PZU',
    price: Math.random() * 100

  },
  {
    id: 'TPE',
    name: 'TAURONPE',
    price: Math.random() * 100

  }
].map(
  item => ({
    ...item,
    price: Math.random() * 100,
    signal: Math.random() > 0.5 ? 'positive' : 'negative'
  })
)

export default Companies