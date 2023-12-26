'use client'
import React, { useState, useEffect } from 'react'
import { db } from '../../../firebaseconfig/firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

export default function Review() {
  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }))
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (review.saran !== '' && review.foto !== '') {
      try {
        await addDoc(collection(db, 'review'), review)
        console.log('Document added successfully')
        // Reset the form after submission
        setReview({ saran: '', rating: 0, foto: '', acc: false })
      } catch (error) {
        console.error('Error adding document: ', error)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'review'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      // You might want to do something with 'data' here
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-stretch px-5 p-10 gap-[100px] w-[80%] justify-center">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold">Review</h1>
          <input
            name="saran"
            value={review.saran}
            onChange={handleInputChange}
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md"
            placeholder="Silahkan ketik disini"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold">Rating</h1>
          <input
            name="rating"
            value={review.rating}
            onChange={handleInputChange}
            type="range"
            max={5}
            min={0}
            className="w-full h-10 border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold">Link</h1>
          <input
            name="foto"
            value={review.foto}
            onChange={handleInputChange}
            type="file"
            className="w-full h-10 border-2 border-gray-300 rounded-md"
          />
        </div>
        <button
          className="flex flex-row items-center justify-center w-24 h-10 text-white bg-blue-500 rounded-md"
          onClick={handleAdd}
          disabled={loading} // Disable button during loading state
        >
          <p className="font-bold">{loading ? 'Adding...' : 'Add'}</p>
        </button>
      </div>
    </div>
  )
}
