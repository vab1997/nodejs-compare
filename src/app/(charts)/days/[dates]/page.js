import BackArrowIcon from '@/components/BackArrowIcon'
import BadgeComponent from '@/components/Badge'
import DonutChartComponent from '@/components/DonutChart'
import LineChartComponent from '@/components/LineChart'
import Stars from '@/components/Star'
import useGetDataDays from '@/hooks/useGetDataDays'

export default async function PageLineChart ({ params }) {
  const { dates } = params
  const { totalDownload, dataLineChart, dataDonutChart, dataNotFound } = await useGetDataDays({ dates })

  return (
    <section className='flex flex-col items-center justify-center w-full py-8 md:py-12'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
        <header className='flex justify-between w-full gap-8 px-2 py-6 mb-4'>
          <a href='/' className='flex items-center gap-2 font-bold text-white text-md hover:underline md:text-lg hover:opacity-80'>
            <BackArrowIcon width={24} height={24} />
            Back to home
          </a>
          <Stars />
        </header>

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
      </div>
    </section>
  )
}
