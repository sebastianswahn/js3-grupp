'use client'
import EventCard from '@/components/eventcard'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getEvents } from '@/lib/getEvents'
import { collection } from 'firebase/firestore'
import { db } from '@/firebase/config'


function LandingPage() {

  const { isSignedIn } = useUser()

  const collectionRef = collection(db, 'events');

  const [ events, setEvents ] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const events = await getEvents(collectionRef)
        setEvents(events)
      }catch(error){
        console.log(error)
      }
    }
    fetchEvents()
  },[collectionRef])

  return (
    <div>
      
      <Navbar />
      <EventCard />
      {isSignedIn ? events.map(event => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <p>{event.location}</p>
        </div>
      
      )) : <h1>Not logged in</h1>}
    
    </div>
  )
}

export default LandingPage