'use client'

import { useEffect, useState } from 'react'
import { COMPARE_OPTIONS } from '@/utils/constants'
import { getArrayNumber } from '@/utils'
import CalendarPicker from '@/components/CalendarPicker'
import MonthPicker from '@/components/MonthPicker'

const STRUCTURE_DATES = [{ 1: '' }, { 2: '' }, { 3: '' }]

export default function useManagaCompare () {
  const [compareOption, setCompareOption] = useState(COMPARE_OPTIONS[0])
  const [quantityDate, setQuantityDate] = useState('0')
  const [dates, setDate] = useState(STRUCTURE_DATES)

  useEffect(() => {
    setQuantityDate('0')
    setDate(STRUCTURE_DATES)
  }, [compareOption])

  const RenderComponentPicker = compareOption === COMPARE_OPTIONS[0] ? CalendarPicker : MonthPicker
  const arrayQuantityDates = getArrayNumber({ length: Number(quantityDate) })

  const paramsDates = dates.flatMap(date => Object.values(date)).filter(date => date !== '').join('-')
  const redirectToCompare = `/${compareOption.toLowerCase()}/${paramsDates}`

  const handleDates = ({ formatDate, label }) => {
    const newArrayListDate = dates.map((date) => {
      if (Number(Object.keys(date)[0]) === label) return { [label]: formatDate }
      return date
    })

    setDate(newArrayListDate)
  }

  const isVisibleCompare = (dates[0][1] !== '') || (dates[1][2] !== '') || (dates[2][3] !== '')

  return {
    typeCompare: compareOption,
    quantityDate,
    renderQuantityDates: arrayQuantityDates,
    isVisibleCompare,
    redirectToCompare,
    handleTypeCompare: setCompareOption,
    handleQuantityDate: setQuantityDate,
    RenderComponentPicker,
    handleDates
  }
}
