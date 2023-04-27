import { NODE_VERSIONS, COUNTRYS, getDateFormated } from '@/utils'

const getDataLineChart = ({ objectData, ArrayDates }) => {
  const dataLineChart = []

  NODE_VERSIONS.forEach(version => {
    let object = { version }

    ArrayDates.forEach((date, index) => {
      const dateFormat = getDateFormated(date)
      const dataVersion = objectData[index].lastVersion[version] ? objectData[index].lastVersion[version] : 0
      object = { ...object, [dateFormat]: dataVersion }
    })

    dataLineChart.push(object)
  })

  return dataLineChart
}

const getDataDonutChart = ({ objectData, ArrayDates }) => {
  return objectData.map((data, index) => {
    const { country } = data
    const dateFormat = getDateFormated(ArrayDates[index])

    const dataCountry = Object.entries(country).splice(0, 10).map(([key, value]) => {
      const countryName = COUNTRYS[key] ? COUNTRYS[key] : key
      return { country: countryName, download: value }
    })

    return { date: dateFormat, dataCountry }
  })
}

export default async function useGetDataChart ({ dates }) {
  const ArrayDates = dates.split('-')

  const getDataFile = await Promise.all(
    ArrayDates.map(date => import(`../../data/${date}.json`))
  ).then(data => {
    return data.map(data => {
      const { totalDownload, country, lastVersion } = data
      const dataResponse = { totalDownload, country, lastVersion }
      return dataResponse
    })
  })

  const dataLineChart = getDataLineChart({ objectData: getDataFile, ArrayDates })
  const dataDonutChart = getDataDonutChart({ objectData: getDataFile, ArrayDates })
  const totalDownload = getDataFile.map(data => data.totalDownload)

  return { totalDownload, dataLineChart, dataDonutChart }
}
