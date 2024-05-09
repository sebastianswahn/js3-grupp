import React from 'react'

function EventCard() {
  return (
    <div className='mt-12 bg-slate-800'>
        <div className='flex justify-between mx-14'>
            <div className='flex'>
            <div className='w-1/3'>
                <div className='bg-slate-500 h-full'>Bilden</div>
            </div>
            <div className='w-2/3'>
                <div>Rubrik</div>
                <div>Datum & Tid</div>
                <div>Beskrivning</div>
                <div>Plats</div>
            </div>
            </div>
            <div className='underline'>Book this event</div>
        </div>
    </div>
  )
}

export default EventCard