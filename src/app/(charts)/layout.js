import Link from 'next/link'
import BackArrowIcon from '@/components/BackArrowIcon'
import Stars from '@/components/Star'

export default function LayoutChart ({ children }) {
  return (
    <section className='flex flex-col items-center justify-center w-full py-8 md:py-12'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
        <header className='flex justify-between w-full gap-8 px-2 py-6 mb-4'>
          <Link href='/' className='flex items-center gap-2 font-bold text-white text-md hover:underline md:text-lg hover:opacity-80'>
            <BackArrowIcon width={24} height={24} />
            Back to home
          </Link>
          <Stars />
        </header>

        {children}
      </div>
    </section>
  )
}
