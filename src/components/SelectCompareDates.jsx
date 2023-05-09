'use client'

import { useState } from 'react'
import PickerDate from '@/components/PickerDate'
import { COMPARE_OPTIONS } from '@/utils/constants'

export default function SelectCompareDates () {
  const [compareOption, setCompareOption] = useState(COMPARE_OPTIONS[0])

  return (
    <section className='flex flex-col items-center justify-center gap-4'>
      <h2 className='text-xl py-1 mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8CC84B] to-[#ddf8c1] to-90% w-full text-center md:text-start lg:text-3xl'>
        Select type and number of dates to compare
      </h2>

      <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
        <label className='text-lg text-white'>Pick comparation</label>
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

      <PickerDate compareOption={compareOption} />
    </section>
  )
}
