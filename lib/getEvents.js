import { getDocs } from 'firebase/firestore';

export const getEvents = async (collection) => {
  const snaps = await getDocs(collection);
  const eventsList = [];

  if (!snaps.empty) {
    snaps.forEach((doc) => {
      eventsList.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } else {
    console.log('No documents found!');
  }

  return eventsList;
};
