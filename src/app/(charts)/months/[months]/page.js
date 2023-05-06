import BackArrowIcon from '@/components/BackArrowIcon'
import BadgeComponent from '@/components/Badge'
import DonutChartComponent from '@/components/DonutChart'
import LineChartComponent from '@/components/LineChart'
import Stars from '@/components/Star'
import useGetDataMonths from '@/hooks/useGetDataMonths'

export default async function PageMonthsChart ({ params }) {
  const { months } = params
  const { dataLineChart, dataDonutChart, totalDownload } = await useGetDataMonths({ months })

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

        <section className='flex flex-col items-center justify-center w-full gap-16'>
          <div className='flex flex-col items-center gap-2 justify-content md:flex-row'>
            <h1 className='text-lg font-bold text-white md:text-xl'>Total downloads by date of all versions:</h1>
            <BadgeComponent dates={months} totalDownload={totalDownload} />
          </div>
          <LineChartComponent dataLineChart={dataLineChart} />
          <DonutChartComponent dataDonutChart={dataDonutChart} />
        </section>
      </div>
    </section>
  )
}
