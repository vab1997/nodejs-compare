'use client'

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      const unitFormat = unit
      return { value, unitFormat }
    }
  }
}

const getTimeAgo = ({ timestamp, locale }) => {
  const rtf = new Intl.RelativeTimeFormat(locale)

  const secondsElapsed = getSecondsDiff(timestamp)
  const dateforFormat = getUnitAndValueDate(secondsElapsed)
  return dateforFormat && rtf.format(dateforFormat.value, dateforFormat.unitFormat)
}

export default function TimeAgo ({ timestamp }) {
  const timeago = getTimeAgo({ timestamp, locale: 'en' })

  const date = new Date(timestamp)
  const formattedDate = new Intl.DateTimeFormat('en', {
    month: 'long', day: 'numeric'
  }).format(date)

  return <time className='border-b-[1px] border-dashed border-[#8CC84B]' title={formattedDate} dateTime={formattedDate}>{timeago}</time>
}
