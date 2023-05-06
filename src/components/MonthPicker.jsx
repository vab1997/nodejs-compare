'use client'

import { useEffect, useState } from 'react'

const MONTH = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

const YEAR = ['2021', '2022', '2023']

export default function MonthPicker ({ label, handleDates }) {
  const [year, setYear] = useState(YEAR[0])
  const [month, setMonth] = useState('')

  useEffect(() => {
    if (year && month) {
      const formatDate = `${year}${month}`
      handleDates({ formatDate, label })
    }
  }, [year, month])

  const validateMonth = (numberMonth) => {
    return (Number(year) === new Date().getFullYear() && Number(numberMonth) > new Date().getMonth() + 1) ||
      (year === YEAR[0] && Number(numberMonth) < 3)
  }

  return (
    <div className='flex items-center justify-center gap-2'>
      <p className='text-transparent text-sm lg:text-md text-center w-full'>Date {label}:</p>
      <div className='flex'>
        <select
          className='bg-transparent border border-white/10 hover:border-node px-2 py-1.5 md:py-2.5 outline-none rounded-l-full text-md md:text-lg text-white'
          onChange={(e) => setYear(e.target.value)}
          value={year}
        >
          {YEAR.map((year) => (
            <option
              key={year}
              value={year}
              className='bg-[#13111c] text-md md:text-lg'
            >
              {year}
            </option>
          ))}
        </select>
        <select
          className='bg-transparent border border-white/10 hover:border-node pl-1.5 py-1.5 md:py-2.5 outline-none rounded-r-full text-md md:text-lg text-white'
          onChange={(e) => setMonth(e.target.value)}
          value={month}
        >
          <option value='' disabled hidden className='bg-[#13111c] text-md md:text-lg'>Month</option>
          {Object.entries(MONTH).sort((a, b) => Number(a[0]) - Number(b[0])).map(([key, month]) => (
            <option
              key={key}
              value={key}
              disabled={validateMonth(Number(key))}
              className='bg-[#13111c] text-md md:text-lg'
            >
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
