'use client'
import React, { useState, useEffect } from 'react'
import { db } from '../../../firebaseconfig/firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

export default function testimoni() {
  const [testimoni, settestimoni] = useState([])
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    settestimoni((prevtestimoni) => ({
      ...prevtestimoni,
      [name]: value,
    }))
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (testimoni.nama !== '' && testimoni.pesan !== '') {
      try {
        const currentDate = new Date().toISOString().split('T')[0]
        const newTestimoni = { ...testimoni, date: currentDate } // Add date field to testimoni object
        await addDoc(collection(db, 'testimoni'), newTestimoni)
        console.log('Document added successfully')
        // Reset the form after submission
        settestimoni({ nama: '', saran: '', date: '' })
      } catch (error) {
        console.error('Error adding document: ', error)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'testimoni'), (snapshot) => {
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
          <h1 className="text-2xl font-bold">Nama</h1>
          <input
            name="nama"
            value={testimoni.nama}
            onChange={handleInputChange}
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md"
            placeholder="Silahkan ketik disini"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold">Saran</h1>
          <input
            name="saran"
            value={testimoni.saran}
            onChange={handleInputChange}
            type="text"
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
