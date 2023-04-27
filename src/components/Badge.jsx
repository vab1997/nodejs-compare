import { getDateFormated } from '@/utils'

const COLORS = ['#3B82F6', '#EF4444', '#8B5CF6']

export default function Badge ({ dates, totalDownload }) {
  const arrayDates = dates.split('-')
  return (
    <>
      {arrayDates.map((date, index) => (
        <span key={date} style={{ background: COLORS[index] }} className='text-center font-medium px-2.5 py-0.5 rounded text-white'>
          {getDateFormated(date)}: {totalDownload[index]}
        </span>
      ))}
    </>
  )
}
