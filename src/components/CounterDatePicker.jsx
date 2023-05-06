'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CalendarPicker from '@/components/CalendarPicker'
import MonthPicker from '@/components/MonthPicker'
import { getArrayNumber } from '@/utils'

const COMPARE_OPTIONS = ['Days', 'Months']
const AMOUNT_OF_DATES = { one: 1, Two: 2, Three: 3 }

export default function CounterDatePicker () {
  const [compareOption, setCompareOption] = useState(COMPARE_OPTIONS[0])
  const [countDate, setCountDate] = useState('0')
  const [dates, setDate] = useState([{ 1: '' }, { 2: '' }, { 3: '' }])

  useEffect(() => {
    setCountDate('0')
    setDate([{ 1: '' }, { 2: '' }, { 3: '' }])
  }, [compareOption])

  const RenderPicker = compareOption === COMPARE_OPTIONS[0] ? CalendarPicker : MonthPicker
  const arrayCountDate = getArrayNumber({ length: countDate })

  const paramsDates = dates.flatMap(date => Object.values(date)).filter(date => date !== '').join('-')
  const redirectChart = compareOption === COMPARE_OPTIONS[0]
    ? `/days/${paramsDates}`
    : `/months/${paramsDates}`

  const handleDates = ({ formatDate, label }) => {
    const newArrayListDate = dates.map((date) => {
      if (Number(Object.keys(date)[0]) === label) return { [label]: formatDate }
      return date
    })

    setDate(newArrayListDate)
  }

  return (
    <section className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
        <h2 className='text-lg text-white'>Compare dates</h2>
        <select
          className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white md:text-lg px-2 py-[6px] md:py-[9px]'
          onChange={(e) => setCompareOption(e.target.value)}
          value={compareOption}
        >
          {COMPARE_OPTIONS.map((option) => (
            <option className='text-white bg-[#13111C]' key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
        <h3 className='text-lg text-white'>How many dates do you want to compare?</h3>
        <select
          className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white md:text-lg px-2 py-[6px] md:py-[9px]'
          onChange={(e) => setCountDate(e.target.value)}
          value={countDate}
        >
          <option disabled className='text-white bg-[#13111C]' value='0'>Select</option>
          {Object.entries(AMOUNT_OF_DATES).map(([key, value]) => (
            <option className='text-white bg-[#13111C]' key={key} value={value}>{key}</option>
          ))}
        </select>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 mt-4 md:flex-row'>
        {arrayCountDate.map(key => (
          <RenderPicker key={key} label={key} handleDates={handleDates} />
        ))}
      </div>

      {(dates[0][1] !== '') || (dates[1][2] !== '') || (dates[2][3] !== '')
        ? (
          <Link
            className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white text-center md:text-lg px-6 py-[6px] md:py-[9px]'
            href={redirectChart}
          >
            Compare
          </Link>
          )
        : null}
    </section>
  )
}
