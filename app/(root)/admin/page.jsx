'use client'

import Navbar from '@/components/navbar'
import { useAuthContext } from '@/components/ui/auth-provider';
import { db } from '@/firebase/config';
import { collection } from 'firebase/firestore';
import { useEffect } from 'react';
import { getEvents } from '@/lib/getEvents';


function AdminPage() {

    const { user, userId } = useAuthContext();
              
              const collectionRef = collection(db, 'events');
              
            useEffect(() => {
              getEvents(collectionRef)
              },[collectionRef])


    if(!user) {
        return (
            <div>Loading...</div>
        )
    }

  return (

    <>
    <Navbar />
    
    <div>AdminPage</div>



    <p>{userId} </p>
    </>

  )
}

export default AdminPage



   // useEffect(() => {
      //   const getCollection  = async () => {
        
        
        //     const snaps = await getDocs(collectionRef)
        
        //     if (!snaps.empty) {
          //       snaps.forEach((doc) => {
            //         console.log('Document data:', doc.data());
            //       });
            //     }else{
              //       console.log('No such document!');
              //     }
              //   }
              //   getCollection()
              //   },[])