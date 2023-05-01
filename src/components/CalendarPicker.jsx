'use client'

import { useState } from 'react'
import Datepicker from 'tailwind-datepicker-react'

const options = {
  title: 'Pick a date',
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  maxDate: new Date(new Date().setDate(new Date().getDate() - 1)),
  minDate: new Date('2021-03-25'),
  theme: {
    background: 'bg-transparent/60 dark:bg-transparent/60 border border-[#8CC84B]',
    todayBtn: '',
    clearBtn: '',
    icons: 'bg-transparent dark:bg-transparent border border-transparent dark:hover:bg-transparent dark:hover:border dark:hover:border-[#8CC84B]',
    text: 'text-md font-medium text-white dark:text-white dark:hover:bg-white/10 hover:bg-white/10',
    disabledText: 'text-white/30 dark:text-white/30 dark:hover:bg-white/10 hover:bg-white/10',
    input: 'bg-transparent dark:bg-transparent outline-none dark:focus:border-[#8CC84B] border dark:border-white/10 hover:border-[#8CC84B] rounded-full text-md md:text-lg py-[6px] md:py-[9px] w-48 ',
    inputIcon: '',
    selected: 'bg-[#8CC84B] text-white'
  },
  icons: {
    prev: () =>
      <span title='Previuos'>
        <svg width='32' height='32' fill='none' viewBox='0 0 24 24'><path stroke='#fff' strokeWidth='2' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' /><path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h8M11 9l-2.913 2.913v0a.123.123 0 0 0 0 .174v0L11 15' /></svg>
      </span>,
    next: () =>
      <span title='Next'>
        <svg width='32' height='32' fill='none' viewBox='0 0 24 24'><path stroke='#fff' strokeWidth='2' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' /><path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12H8M13 15l2.913-2.913v0a.123.123 0 0 0 0-.174v0L13 9' /></svg>
      </span>
  },
  datepickerClassNames: 'top-13',
  defaultDate: new Date(),
  language: 'en'
}

export default function CalendarPicker ({ handleDates, label }) {
  const [show, setShow] = useState(false)

  const handleChange = (selectedDate) => {
    const formatDate = selectedDate.toISOString().split('T')[0].split('-').join('')
    handleDates({ formatDate, label })
  }

  const handleClose = (state) => {
    setShow(state)
  }

  return (
    <Datepicker classNames='w-full' options={options} onChange={handleChange} show={show} setShow={handleClose} />
  )
}
