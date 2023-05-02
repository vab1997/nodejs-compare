import TimeAgo from '@/components/TimeAgo'
import fileUpdate from '../../db/infoUpdate.json'
import { getDateFormated } from '@/utils/index'

export default function InfoUpdate () {
  return (
    <div className='flex flex-col gap-2 pt-2 pb-4'>
      <small className='text-center text-gray-300'>
        Update date {' '}
        <TimeAgo timestamp={fileUpdate.lastModified} />.
        Source: {' '}
        <a
          href='https://storage.googleapis.com/access-logs-summaries-nodejs'
          target='_blank'
          rel='noopener noreferrer'
        >
          summaries Nodejs
        </a>
      </small>
      <small className='text-center text-gray-300'>
        Latest available data as of {getDateFormated(fileUpdate.dateUpdated)}
      </small>
    </div>
  )
}
