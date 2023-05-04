import NodejsIcon from '@/components/NodejsIcon'

export default function Header () {
  return (
    <header className='flex items-center justify-center flex-col gap-6 pt-8 pb-4 lg:pb-6 lg:pt-12'>
      <h1 className='gap-2 text-center text-5xl font-bold text-[#8CC84B] md:text-6xl lg:text-8xl md:flex md:justify-center md:items-center'>
        Downloads Node.js
        <span className='flex items-center justify-center pt-2'>
          <NodejsIcon />
        </span>
      </h1>
      <h2 className='text-lg font-medium text-center text-white lg:text-4xl md:text-2xl'>
        Show and compare Nodejs download counts over time
      </h2>
    </header>
  )
}
