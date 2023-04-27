'use client'

import Link from 'next/link'
import { useState } from 'react'

const getArrayNumber = ({ length }) => Array.from({ length }, (_, i) => i + 1)

export default function CounterDatePicker () {
  const [countDate, setCountDate] = useState(0)
  const [dates, setDate] = useState([{ 1: '' }, { 2: '' }, { 3: '' }])

  const arrayCountDate = getArrayNumber({ length: countDate })

  const handleDate = (e, key) => {
    const { value } = e.target
    const dateValue = value.split('-').join('')

    const newArrayListDate = dates.map((date) => {
      if (Number(Object.keys(date)[0]) === key) return { [key]: dateValue }
      return date
    })

    setDate(newArrayListDate)
  }

  console.log(dates.flatMap(date => Object.values(date)).filter(date => date !== '').join('-'))

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <h3 className='text-white'>How many dates do you want to compare?</h3>
        <select className='' onChange={(e) => setCountDate(e.target.value)}>
          <option value='1'>one date</option>
          <option value='2'>two dates</option>
          <option value='3'>three dates</option>
        </select>
      </div>

      <div className='flex items-center justify-center gap-4'>
        {arrayCountDate.map(key => (
          <div key={key}>
            <label className='text-white'>label {key}</label>
            <input type='date' onChange={e => handleDate(e, key)} />
          </div>
        ))}
      </div>

      <Link
        className='text-white'
        href={`/lineChart/${dates.flatMap(date => Object.values(date)).filter(date => date !== '').join('-')}`}
      >
        Compare
      </Link>
    </div>
  )
}
