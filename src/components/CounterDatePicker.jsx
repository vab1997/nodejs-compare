'use client'

import Link from 'next/link'
import { useState } from 'react'
import CalendarPicker from '@/components/CalendarPicker'

const getArrayNumber = ({ length }) => Array.from({ length }, (_, i) => i + 1)

export default function CounterDatePicker () {
  const [countDate, setCountDate] = useState(0)
  const [dates, setDate] = useState([{ 1: '' }, { 2: '' }, { 3: '' }])

  const arrayCountDate = getArrayNumber({ length: countDate })

  const handleDates = ({ formatDate, label }) => {
    const newArrayListDate = dates.map((date) => {
      if (Number(Object.keys(date)[0]) === label) return { [label]: formatDate }
      return date
    })

    setDate(newArrayListDate)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
        <h3 className='text-white text-lg'>How many dates do you want to compare?</h3>
        <select
          className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white md:text-lg px-2 py-[6px] md:py-[9px]'
          onChange={(e) => setCountDate(e.target.value)}
        >
          <option selected disabled className='text-white bg-[#13111C]' value='0'>Select</option>
          <option className='text-white bg-[#13111C]' value='1'>One date</option>
          <option className='text-white bg-[#13111C]' value='2'>Two dates</option>
          <option className='text-white bg-[#13111C]' value='3'>Three dates</option>
        </select>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 mt-4 md:flex-row'>
        {arrayCountDate.map(key => (
          <CalendarPicker key={key} label={key} handleDates={handleDates} />
        ))}
      </div>

      {(dates[0][1] !== '') || (dates[1][2] !== '') || (dates[2][3] !== '')
        ? (
          <Link
            className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white text-center md:text-lg px-6 py-[6px] md:py-[9px]'
            href={`/charts/${dates.flatMap(date => Object.values(date)).filter(date => date !== '').join('-')}`}
          >
            Compare
          </Link>
          )
        : null}
    </div>
  )
}
