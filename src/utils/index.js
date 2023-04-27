export const NODE_VERSIONS = [
  'v20.0.0',
  'v19.9.0',
  'v19.7.0',
  'v18.14.0',
  'v18.9.0',
  'v17.9.1',
  'v16.19.1',
  'v16.17.0',
  'v15.14.0',
  'v15.12.0',
  'v14.21.3',
  'v14.16.0',
  'v13.14.0',
  'v12.22.12',
  'v12.21.12',
  'v11.15.0',
  'v10.24.0',
  'v9.11.2',
  'v8.17.0',
  'v7.10.1',
  'v6.17.1',
  'v5.12.0',
  'v4.9.1',
  'v0.12.18'
]

export const COUNTRYS = {
  US: 'United States',
  IN: 'India',
  DE: 'Germany',
  IE: 'Ireland',
  NL: 'Netherlands',
  AU: 'Australia',
  CN: 'China',
  FR: 'France',
  GB: 'United Kingdom',
  SG: 'Singapore',
  JP: 'Japan',
  RU: 'Russia',
  CA: 'Canada',
  BR: 'Brazil',
  XX: 'Country Unknown',
  BE: 'Belgium',
  FI: 'Finland',
  HK: 'Hong Kong',
  ES: 'Spain',
  KR: 'South Korea',
  PL: 'Poland',
  SE: 'Sweden',
  AT: 'Austria',
  CH: 'Switzerland',
  ID: 'Indonesia',
  IT: 'Italy',
  CZ: 'Czech Republic',
  TW: 'Taiwan',
  VN: 'Vietnam',
  TR: 'Turkey',
  TH: 'Thailand',
  MX: 'Mexico',
  PK: 'Pakistan',
  AR: 'Argentina',
  CO: 'Colombia',
  UA: 'Ukraine',
  NO: 'Norway',
  DK: 'Denmark',
  PT: 'Portugal',
  IR: 'Iran',
  PH: 'Philippines',
  EG: 'Egypt',
  IL: 'Israel',
  RO: 'Romania',
  ZA: 'South Africa',
  BD: 'Bangladesh',
  HU: 'Hungary',
  NG: 'Nigeria',
  TN: 'Tunisia',
  GR: 'Greece'
}

export function getDateFormated (date) {
  if (date === undefined) return ''

  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 8)

  const formatDate = day ? `${year}/${month}/${day}` : `${year}/${month}`
  return formatDate
}
