import { getDateFormated, getDataLineChart, getDataDonutChart } from '@/utils'

export default async function useGetDataDays ({ dates }) {
  const listDates = dates.split('-')

  const dataFiles = await Promise.all(
    listDates.map(date => import(`../../db/${date}.json`))
  ).then(data => {
    return data.map(data => {
      const { totalDownload, country, lastVersion } = data
      const dataResponse = { totalDownload, country, lastVersion }
      return dataResponse
    })
  }).catch(error => {
    return error
  })

  const dateNotFound = dataFiles?.message?.split('/')[1].split('.')[0]
  const dataNotFound = dataFiles?.message?.startsWith('Cannot find module')
    ? `Data not found: ${getDateFormated(dateNotFound)}`
    : null

  if (dataNotFound) return { dataNotFound }

  const dataLineChart = getDataLineChart({ objectData: dataFiles, listDates })
  const dataDonutChart = getDataDonutChart({ objectData: dataFiles, listDates })
  const totalDownload = dataFiles.map(data => data.totalDownload)

  return { totalDownload, dataLineChart, dataDonutChart }
}
