import { NODE_VERSIONS, COUNTRYS, getDateFormated } from '@/utils'

const getDataLineChart = ({ objectData, listDates }) => {
  const dataLineChart = []
  const nodeVersionAsc = [...NODE_VERSIONS].reverse()

  nodeVersionAsc.forEach(version => {
    let object = { version }

    listDates.forEach((date, index) => {
      const dateFormat = getDateFormated(date)
      const dataVersion = objectData[index].lastVersion[version] ? objectData[index].lastVersion[version] : 0
      object = { ...object, [dateFormat]: dataVersion }
    })

    dataLineChart.push(object)
  })

  return dataLineChart
}

const getDataDonutChart = ({ objectData, listDates }) => {
  return objectData.map((data, index) => {
    const { country } = data
    const dateFormat = getDateFormated(listDates[index])

    const dataCountry = Object.entries(country).splice(0, 10).map(([key, value]) => {
      const countryName = COUNTRYS[key] ? COUNTRYS[key] : key
      return { country: countryName, download: value }
    })

    return { date: dateFormat, dataCountry }
  })
}

export default async function useGetDataChart ({ dates }) {
  const listDates = dates.split('-')

  const dataFiles = await Promise.all(
    listDates.map(date => import(`../../data/${date}.json`))
  ).then(data => {
    return data.map(data => {
      const { totalDownload, country, lastVersion } = data
      const dataResponse = { totalDownload, country, lastVersion }
      return dataResponse
    })
  })

  const dataLineChart = getDataLineChart({ objectData: dataFiles, listDates })
  const dataDonutChart = getDataDonutChart({ objectData: dataFiles, listDates })
  const totalDownload = dataFiles.map(data => data.totalDownload)

  return { totalDownload, dataLineChart, dataDonutChart }
}
