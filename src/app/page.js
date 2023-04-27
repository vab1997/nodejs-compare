import CounterDatePicker from '@/components/CounterDatePicker'

export default function Home () {
  return (
    <main className='flex items-center justify-center py-16 px-12'>
      <div className='flex flex-col items-center justify-center gap-8 max-w-6xl w-full'>
        <h1 className='text-[#8CC84B] font-medium text-5xl'>Nodejs Compare</h1>

        <CounterDatePicker />
      </div>
    </main>
  )
}
