import React from 'react'

function EventCard() {
  return (
    <div className='mt-12 bg-slate-800'>
        <div className='flex justify-between mx-14'>
            <div className='flex'>
            <div className='w-1/3'>
                <img src='https://via.placeholder.com/150' />
            </div>
            <div className='w-2/3'>
                <div>Event Name</div>
                <div>Event Date</div>
                <div>Event Description</div>
            </div>
            </div>
            <div className='underline'>Book this event</div>
        </div>
    </div>
  )
}

export default EventCard