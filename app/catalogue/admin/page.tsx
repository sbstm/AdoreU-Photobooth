'use client'
import React, { useState, useEffect } from 'react'
import { db } from '../../../firebaseconfig/firebase'
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
} from 'firebase/firestore'

export default function Testimoni() {
  const [testimoni, setTestimoni] = useState([])
  const [newTestimoni, setNewTestimoni] = useState({
    nama: '',
    saran: '',
    date: '', // Pastikan ini sesuai dengan struktur data yang diharapkan
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewTestimoni((prevTestimoni) => ({
      ...prevTestimoni,
      [name]: value,
    }))
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (newTestimoni.nama !== '' && newTestimoni.saran !== '') {
      try {
        const currentDate = new Date().toISOString().split('T')[0]
        const newTestimoniWithDate = {
          ...newTestimoni,
          date: currentDate,
        }
        await addDoc(collection(db, 'testimoni'), newTestimoniWithDate)
        console.log('Document added successfully')
        setNewTestimoni({
          nama: '',
          saran: '',
          date: '',
        })
      } catch (error) {
        console.error('Error adding document: ', error)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    const q = query(collection(db, 'testimoni'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let testimoni = []

      querySnapshot.forEach((doc) => {
        testimoni.push({ ...doc.data(), id: doc.id })
      })
      setTestimoni(testimoni)

      // Read total from itemsArr
      return () => unsubscribe()
    })
  }, [])

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'testimoni', id))
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-stretch px-5 p-10 gap-[100px] w-[80%] justify-center">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold">Nama</h1>
          <input
            name="nama"
            value={newTestimoni.nama}
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
            value={newTestimoni.saran}
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
      <div className="w-[80%]">
        <h1 className="text-2xl font-bold mb-4">Reviews</h1>
        {testimoni.map((testimoni) => (
          <div
            key={testimoni.id}
            className="border border-gray-300 p-4 mb-4 rounded-md"
          >
            <p>nama: {testimoni.nama}</p>
            <p>Saran: {testimoni.saran}</p>
            <p>date: {testimoni.date}</p>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => deleteItem(testimoni.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
