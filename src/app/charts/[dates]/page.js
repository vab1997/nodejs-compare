import BackArrowIcon from '@/components/BackArrowIcon'
import BadgeComponent from '@/components/Badge'
import DonutChartComponent from '@/components/DonutChart'
import LineChartComponent from '@/components/LineChart'
import Stars from '@/components/Star'
import useGetDataChart from '@/hooks/useGetDataChart'

export default async function PageLineChart ({ params }) {
  const { dates } = params
  const { totalDownload, dataLineChart, dataDonutChart, dataNotFound } = await useGetDataChart({ dates })

  return (
    <section className='flex flex-col items-center justify-center py-8 md:py-12 w-full'>
      <div className='flex flex-col items-center justify-center max-w-6xl w-full'>
        <header className='flex justify-between gap-8 w-full px-2 py-6 mb-4'>
          <a href='/' className='flex gap-2 items-center text-md font-bold text-white hover:underline md:text-lg hover:opacity-80'>
            <BackArrowIcon width={24} height={24} />
            Back to home
          </a>
          <Stars />
        </header>

        {dataNotFound
          ? (
            <span className='text-red-500 font-bold text-center text-lg md:text-xl border border-red-500/30 px-8 py-4 rounded-lg'>
              {dataNotFound}
            </span>
            )
          : (
            <section className='flex flex-col items-center justify-center gap-16 w-full'>
              <div className='flex flex-col justify-content items-center gap-2 md:flex-row'>
                <h1 className='text-white font-bold text-lg md:text-xl'>Total downloads by date of all versions:</h1>
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
