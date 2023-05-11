import BadgeComponent from '@/components/Badge'
import DonutChartComponent from '@/components/DonutChart'
import LineChartComponent from '@/components/LineChart'
import useGetDataDays from '@/hooks/useGetDataDays'

export default async function PageLineChart ({ params }) {
  const { dates } = params
  const { totalDownload, dataLineChart, dataDonutChart, dataNotFound } = await useGetDataDays({ dates })

  return (
    <>
      {dataNotFound
        ? (
          <span className='px-8 py-4 text-lg font-bold text-center text-red-500 border rounded-lg md:text-xl border-red-500/30'>
            {dataNotFound}
          </span>
          )
        : (
          <section className='flex flex-col items-center justify-center w-full gap-16'>
            <div className='flex flex-col items-center gap-2 justify-content md:flex-row'>
              <h1 className='text-lg font-bold text-white md:text-xl'>Total downloads by date of all versions:</h1>
              <BadgeComponent dates={dates} totalDownload={totalDownload} />
            </div>
            <LineChartComponent dataLineChart={dataLineChart} />
            <DonutChartComponent dataDonutChart={dataDonutChart} />
          </section>
          )}
    </>
  )
}
