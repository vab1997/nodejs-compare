import BackArrowIcon from '@/components/BackArrowIcon'
import BadgeComponent from '@/components/Badge'
import DonutChartComponent from '@/components/DonutChart'
import LineChartComponent from '@/components/LineChart'
import { Stars } from '@/components/Star'
import useGetDataChart from '@/hooks/useGetDataChart'

export default async function PageLineChart ({ params }) {
  const { dates } = params

  const { totalDownload, dataLineChart, dataDonutChart } = await useGetDataChart({ dates })

  return (
    <main className='flex flex-col items-center justify-center py-12 w-full'>
      <div className='flex flex-col items-center justify-center max-w-6xl w-full'>
        <header className='flex justify-between gap-8 w-full py-6'>
          <a href='/' className='flex gap-2 items-center text-lg font-bold text-white hover:underline hover:opacity-80'>
            <BackArrowIcon width={24} height={24} />
            Home
          </a>
          <Stars />
        </header>

        <section className='flex flex-col items-center justify-center gap-16 w-full'>
          <div className='flex items-center gap-2'>
            <h1 className='text-white font-bold text-xl'>Total download per date of all version:</h1>
            <BadgeComponent dates={dates} totalDownload={totalDownload} />
          </div>
          <LineChartComponent dataLineChart={dataLineChart} />
          <DonutChartComponent dataDonutChart={dataDonutChart} />
        </section>
      </div>
    </main>
  )
}
