'use client'

import Link from 'next/link'
import Select from '@/components/Select'
import useManageCompare from '@/hooks/useManageCompare'
import { COMPARE_OPTIONS, AMOUNT_OF_DATES } from '@/utils/constants'

export default function SelectCompareDates () {
  const {
    typeCompare,
    quantityDate,
    renderQuantityDates,
    isVisibleCompare,
    redirectToCompare,
    handleTypeCompare,
    handleQuantityDate,
    RenderComponentPicker,
    handleDates
  } = useManageCompare()

  return (
    <section className='flex flex-col items-center justify-center gap-4'>
      <h2 className='text-xl py-1 mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8CC84B] to-[#ddf8c1] to-90% w-full text-center md:text-start lg:text-3xl'>
        Select type and number of dates to compare
      </h2>

      <Select label='Pick comparation' setValue={handleTypeCompare} value={typeCompare}>
        {COMPARE_OPTIONS.map((option) => (
          <option className='text-white bg-[#13111C]' key={option} value={option}>{option}</option>
        ))}
      </Select>

      <Select label='Pick number' setValue={handleQuantityDate} value={quantityDate}>
        <option disabled className='text-white bg-[#13111C]' value='0'>Select</option>
        {Object.entries(AMOUNT_OF_DATES).map(([key, value]) => (
          <option className='text-white bg-[#13111C]' key={key} value={value}>{key}</option>
        ))}
      </Select>

      <div className='flex flex-col items-center justify-center gap-4 mt-4 md:flex-row'>
        {renderQuantityDates.map(key => (
          <RenderComponentPicker key={key} label={key} handleDates={handleDates} />
        ))}
      </div>

      {isVisibleCompare && (
        <Link
          className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white text-center md:text-lg px-6 py-[6px] md:py-[9px]'
          href={redirectToCompare}
        >
          Compare
        </Link>
      )}
    </section>
  )
}
