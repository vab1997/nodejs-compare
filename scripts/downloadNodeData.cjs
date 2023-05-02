
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import filenamesData from './filenamesData.json' assert { type: 'json' }

import { preparedData } from './preparedData.mjs'

const DB_PATH = path.join(process.cwd(), './data/')
const URLDATA = 'https://storage.googleapis.com/access-logs-summaries-nodejs/nodejs.org-access.log.'

async function downloadNodeData () {
  const { filenameData } = filenamesData
  filenameData.map(async filename => {
    const resData = await fetch(`${URLDATA}${filename}.json`)
    const data = await resData.json()
    const { total, country, version } = data

    const dataToSave = await preparedData({ total, country, version })

    await writeFile(`${DB_PATH}/${filename}.json`, JSON.stringify(dataToSave, null, 0), 'utf-8')
    console.log('data saved')
  })
}

await downloadNodeData()
