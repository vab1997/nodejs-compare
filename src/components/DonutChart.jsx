'use client'

import { Card, Title, DonutChart } from '@tremor/react'
import CalendarIcon from './CalendarIcon'

export default function DonutChartComponent ({ dataDonutChart }) {
  return (
    <div className='flex flex-col justify-center gap-6 px-2 w-full'>
      <h2 className='text-white font-medium text-lg'>Downloads count in the days in the countrys:</h2>
      <div className='flex flex-col items-center justify-center gap-2 w-full md:flex-row'>
        {dataDonutChart.map(({ date, dataCountry }) => (
          <Card key={date} className='bg-transparent p-4 max-w-sm w-full ring-0 ring-tranparent shadow-none'>
            <Title className='flex items-center justify-center gap-2 text-white text-center'>
              <CalendarIcon width={24} height={24} fill='white' />
              {date}
            </Title>
            <DonutChart
              className='mt-6 w-full h-72 '
              data={dataCountry}
              category='download'
              index='country'
              showLabel='true'
              label='Top 10 downloads'
              colors={['red', 'violet', 'indigo', 'rose', 'cyan', 'amber', 'purple', 'orange', 'fuchsia', 'blue']}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}
