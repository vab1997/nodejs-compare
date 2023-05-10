import { getDateFormated, formatNumber } from '@/utils'

const COLORS = ['#f43f5e', '#8b5cf6', '#0ea5e9']

export default function Badge ({ dates, totalDownload }) {
  const arrayDates = dates.split('-')
  return (
    <>
      {arrayDates.map((date, index) => (
        <span key={date} style={{ background: COLORS[index] }} className='text-center font-medium px-2.5 py-0.5 rounded text-white'>
          {getDateFormated(date)}: <span className='text-bold'>{formatNumber(totalDownload[index])}</span>
        </span>
      ))}
    </>
  )
}
