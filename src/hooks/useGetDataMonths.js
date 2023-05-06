import filenamesData from '../../scripts/filenamesData.json'
import { getDataLineChart, getDataDonutChart } from '@/utils'

export default async function useGetDataMonths ({ months }) {
  const listDates = months.split('-')

  const filterDaysOfMonths = listDates.map(date => {
    const { filenameData } = filenamesData
    return filenameData.filter(filename => filename.startsWith(date))
  })

  const dataMonths = filterDaysOfMonths.map(async arrayDays => {
    return await Promise.all(
      arrayDays.map(date => import(`../../db/${date}.json`))
    ).then(data => {
      return data.map(data => {
        const { totalDownload, country, lastVersion } = data
        const dataResponse = { totalDownload, country, lastVersion }
        return dataResponse
      })
    }).catch(error => {
      return error
    })
  })

  const takeIntoAccountDataForMonths = dataMonths.map(async months => {
    const arrayData = await months

    let mediaMonthsDownload = {
      totalDownload: 0,
      country: {},
      lastVersion: {}
    }

    arrayData.forEach(month => {
      const { totalDownload, country, lastVersion } = month

      const countryKeys = Object.keys(country)
      countryKeys.forEach(key => {
        if (mediaMonthsDownload.country[key]) {
          mediaMonthsDownload.country[key] = mediaMonthsDownload.country[key] + country[key]
        } else {
          mediaMonthsDownload.country[key] = country[key]
        }
      })

      const lastVersionKeys = Object.keys(lastVersion)
      lastVersionKeys.forEach(key => {
        if (mediaMonthsDownload.lastVersion[key]) {
          mediaMonthsDownload.lastVersion[key] = mediaMonthsDownload.lastVersion[key] + lastVersion[key]
        } else {
          mediaMonthsDownload.lastVersion[key] = lastVersion[key]
        }
      })

      mediaMonthsDownload = {
        totalDownload: mediaMonthsDownload.totalDownload + totalDownload,
        country: mediaMonthsDownload.country,
        lastVersion: mediaMonthsDownload.lastVersion
      }
    })

    return mediaMonthsDownload
  })

  const dataForMonths = await Promise.all(takeIntoAccountDataForMonths)

  const dataLineChart = getDataLineChart({ objectData: dataForMonths, listDates })
  const dataDonutChart = getDataDonutChart({ objectData: dataForMonths, listDates })
  const totalDownload = dataForMonths.map(data => data.totalDownload)

  return { dataLineChart, dataDonutChart, totalDownload }
}
