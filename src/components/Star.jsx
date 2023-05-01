import StarIcon from '@/components/StarIcon'

export default function Stars ({ stars = '2.9K' }) {
  return (
    <a
      className='flex items-center justify-center h-full transition-colors bg-transparent border border-white/10 rounded-md hover:border-[#8CC84B]'
      href='https://github.com/vab1997/nodejs-compare'
      target='_blank'
      rel='noreferrer'
    >
      <span className='flex items-center justify-center px-3 py-2 overflow-hidden text-sm font-semibold text-white border-r border-r-white/10 gap-x-1'>
        <StarIcon fill='white' />
        Star
      </span>

      <span className='flex px-2 py-2 text-sm text-white font-semibold bg-transparent'>
        {stars}
      </span>
    </a>
  )
}
