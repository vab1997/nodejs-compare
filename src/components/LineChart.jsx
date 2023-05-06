'use client'

import { Card, Title, LineChart } from '@tremor/react'
import { formatNumber } from '@/utils'

export default function LineChartComponent ({ dataLineChart }) {
  const categories = Object.keys(dataLineChart[0]).filter(key => key !== 'version')

  return (
    <div className='flex items-center justify-center px-2 max-w-6xl w-full'>
      <Card className=' bg-transparent text-white'>
        <Title className='text-white font-medium'>Downloads count in the days
          {categories.map((date, index) => (
            <span key={date} className='px-1'>{date} {categories.length !== (index + 1) && 'vs'}</span>
          ))}:
        </Title>
        <LineChart
          className='mt-6'
          data={dataLineChart}
          index='version'
          categories={categories}
          colors={['rose', 'violet', 'sky']}
          valueFormatter={formatNumber}
          yAxisWidth={50}
        />
      </Card>
    </div>
  )
}
