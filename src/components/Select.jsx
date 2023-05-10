export default function Select ({ label, setValue, value, children }) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
      <label className='text-lg text-white'>{label}</label>
      <select
        className='bg-transparent outline-none focus:border-[#8CC84B] border border-white/10 hover:border-[#8CC84B] rounded-full text-white md:text-lg px-2 py-[6px] md:py-[9px]'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        {children}
      </select>
    </div>
  )
}
