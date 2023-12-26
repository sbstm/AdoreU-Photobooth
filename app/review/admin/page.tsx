'use client'
import { useState, useEffect } from 'react'
import { db } from '../../../firebaseconfig/firebase'
import {
  collection,
  addDoc,
  getDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { ref } from 'firebase/storage' // Import ref

export default function Adminreview() {
  const [review, setReview] = useState<Array<{ id: string }>>([]) // Update the type of reviews state

  useEffect(() => {
    const q = query(collection(db, 'review'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let reviews = []

      querySnapshot.forEach((doc) => {
        reviews.push({ ...doc.data(), id: doc.id })
      })
      setReview(reviews)

      // Read total from itemsArr
      return () => unsubscribe()
    })
  }, [])

  const updateItem = async (id) => {
    try {
      const itemRef = doc(db, 'review', id)
      const itemDoc = await getDoc(itemRef)

      if (itemDoc.exists()) {
        await updateDoc(itemRef, {
          ...itemDoc.data(),
          acc: true,
        })
        console.log('Document successfully updated!')
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.error('Error updating document: ', error)
    }
  }

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'review', id))
  }
  return (
    <div className="w-[80%]">
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      {review.map((review) => (
        <div
          key={review.id}
          className="border border-gray-300 p-4 mb-4 rounded-md"
        >
          <p>Saran: {review.saran}</p>
          <p>Rating: {review.rating}</p>
          <p>Link: {review.foto}</p>
          <p>
            acc:{' '}
            {review.acc ? (
              'true'
            ) : (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => updateItem(review.id)}
              />
            )}
          </p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => deleteItem(review.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
