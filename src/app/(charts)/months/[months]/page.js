import BadgeComponent from '@/components/Badge'
import DonutChartComponent from '@/components/DonutChart'
import LineChartComponent from '@/components/LineChart'
import useGetDataMonths from '@/hooks/useGetDataMonths'

export default async function PageMonthsChart ({ params }) {
  const { months } = params
  const { dataLineChart, dataDonutChart, totalDownload } = await useGetDataMonths({ months })

  return (
    <section className='flex flex-col items-center justify-center w-full gap-16'>
      <div className='flex flex-col items-center gap-2 justify-content md:flex-row'>
        <h1 className='text-lg font-bold text-white md:text-xl'>Total downloads by date of all versions:</h1>
        <BadgeComponent dates={months} totalDownload={totalDownload} />
      </div>
      <LineChartComponent dataLineChart={dataLineChart} />
      <DonutChartComponent dataDonutChart={dataDonutChart} />
    </section>
  )
}
