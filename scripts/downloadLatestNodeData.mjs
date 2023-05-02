import { writeFile } from 'node:fs/promises'
import path from 'node:path'

import filenamesData from './filenamesData.json' assert { type: 'json' }
import { preparedData } from './preparedData.mjs'

const URL_API_DATA = 'https://storage.googleapis.com/access-logs-summaries-nodejs/nodejs.org-access.log.'
const PATH_FILENAME = path.join(process.cwd(), './scripts/')
const DB_PATH = path.join(process.cwd(), './db/')

async function downloadNodeDataForToday () {
  const dateLastest = String(new Date().toISOString().split('T')[0].split('-').join('') - 1)
  const resData = await fetch(`${URL_API_DATA}${dateLastest}.json`)

  const lastDateAvailable = resData.status === 200
    ? { lastModified: +new Date(), dateUpdated: dateLastest }
    : { lastModified: +new Date(), dateUpdated: filenamesData.filenameData.at(-1) }

  const checkDataExist = filenamesData.filenameData.includes(dateLastest)

  await writeFile(`${DB_PATH}/infoUpdate.json`, JSON.stringify(lastDateAvailable, null, 0), 'utf-8')

  if (resData.status !== 200 || checkDataExist) {
    console.log('No data for save')
    return
  }

  const { filenameData } = filenamesData
  filenameData.push(dateLastest)

  const data = await resData.json()
  const { total, country, version } = data

  const dataToSave = await preparedData({ total, country, version })

  console.log('writing to db...')
  await writeFile(`${DB_PATH}/${dateLastest}.json`, JSON.stringify(dataToSave, null, 0), 'utf-8')
  await writeFile(`${PATH_FILENAME}/filenamesData.json`, JSON.stringify({ filenameData }, null, 0), 'utf-8')
  console.log('data saved')
}

await downloadNodeDataForToday()
