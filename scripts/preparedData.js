const NODE_VERSIONS = [
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

export async function preparedData ({ total, country, version }) {
  const countryTop50 = Object.entries(country).splice(0, 50).map(([key, value]) => {
    return { [key]: value }
  }).flatMap(Object.entries).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  const versionStableFound = Object.entries(version).filter(([key]) => NODE_VERSIONS.includes(key)).map(([key, value]) => {
    return { [key]: value }
  }).flatMap(Object.entries).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  const versionsCompleteAndSorted = NODE_VERSIONS.map(version => {
    return versionStableFound[version] ? { [version]: versionStableFound[version] } : null
  }).filter(Boolean).flatMap(Object.entries).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  return { totalDownload: total, country: countryTop50, lastVersion: versionsCompleteAndSorted }
}
