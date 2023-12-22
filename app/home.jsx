'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  query,
  setDoc,
  onSnapshot,
  deleteDoc,
<<<<<<< HEAD
  doc,
} from 'firebase/firestore'
import { db, storage } from './firebase'
import Link from 'next/link'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

const RatingStar = ({ rating }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <svg
          className="w-4 h-4 fill-current text-yellow-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21L16.54 13.94L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.94L5.82 21L12 17.27Z" />
        </svg>
      )
    } else {
      stars.push(
        <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.94L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.94L5.82 21L12 17.27Z" />
        </svg>
      )
=======
  doc} from 'firebase/firestore';
  import { db, storage } from './firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Link from 'next/link';
  
  const RatingStar = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
       if (i < rating) {
         stars.push(<svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.94L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.94L5.82 21L12 17.27Z"/></svg>);
       } else {
         stars.push(<svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.94L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.94L5.82 21L12 17.27Z"/></svg>);
       }
>>>>>>> d12b253 (Add Firebase storage functionality and update Home component)
    }
  }
  return <div className="flex space-x-1">{stars}</div>
}

export default function Home() {
<<<<<<< HEAD
  const [items, setItems] = useState([{ saran: '', rating: 0, acc: false }])
  const [newItems, setNewItems] = useState({
    saran: '',
    rating: 0,
    acc: false,
  })
  const [foto, setFoto] = useState(null)
  const [total, setTotal] = useState(0)

  const addItem = async (e) => {
    e.preventDefault()
    if (newItems.saran !== '' && newItems.rating !== '' && foto !== null) {
      const storageRef = ref(storage, `images/${foto.name}`)
      const uploadTask = uploadBytesResumable(storageRef, foto)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(`Upload is ${progress}% done`)
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
          })
        }
      )
      await addDoc(collection(db, 'items'), {
        saran: newItems.saran.trim(),
        rating: newItems.rating,
        acc: (newItems.acc = false),
      })
      setNewItems({ saran: '', rating: 0, acc: false })
=======
  const [items, setItems] = useState([{ saran: '',foto: null, rating: '', acc: false, url: '' }]);
  const [newItems, setNewItems] = useState({ saran: '', foto: null,rating: '', acc: false , url: ''});
  const [total, setTotal] = useState(0);

  const handlefoto = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewItems({ ...newItems, foto: e.target.files[0] });
    }
  };
  

  const addItem = async (e) =>  {
    e.preventDefault();
    if (newItems.saran !== '' && newItems.foto !== null && newItems.rating !== '') {
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + newItems.foto);
      const uploadTask = uploadBytesResumable(storageRef, newItems.foto);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.log(error);
        },
        () => {
          // When upload is complete, get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setNewItems({ ...newItems, url: downloadURL });
            // Add to Firestore
            addDoc(collection(db, 'items'), {
              saran: newItems.saran.trim(),
              rating: newItems.rating,
              url: downloadURL,
              acc: false
            });
          });
        }
      );

      setNewItems({ saran: '', rating: '', acc: false, url: '' });
>>>>>>> d12b253 (Add Firebase storage functionality and update Home component)
    }
  }

  useEffect(() => {
    const q = query(collection(db, 'items'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let temp = []

      querySnapshot.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id })
      })
      setItems(temp)

      // Read total from temp
      const calculateTotal = () => {
        const totalPrice = temp.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        )
        setTotal(totalPrice)
      }
      calculateTotal()
    })

    return () => unsubscribe()
  }, [])

  const updateItem = (id, acc) => {
    setItems(items.map((item) => (item.id === id ? { ...item, acc } : item)))
  }
  const filterAcceptedItems = items.filter((item) => item.acc)
  const filterAcceptedItems2 = items.filter((item) => !item.acc)

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id))
  }

  return (
    <>
      <div className="p-10 grid items-center bg-black">
        <form action="">
          <h4>saran</h4>
          <input
            value={newItems.saran}
            onChange={(e) =>
              setNewItems({ ...newItems, saran: e.target.value })
            }
            type="text"
            className=""
            id="saran"
            placeholder="silahkan di isi"
          />
          <h4>foto</h4>
<<<<<<< HEAD
          <input
            value={newItems.foto}
            onChange={(e) => setNewItems({ ...newItems, foto: e.target.value })}
            type="file"
            max={1}
            maxsize={10000}
            className=""
            id="foto"
          />
=======
          <input value={newItems.foto}
          onChange={handlefoto}
          type="file"
          accept="image/*" className="" id="foto" max={1} maxLength={1000} />
>>>>>>> d12b253 (Add Firebase storage functionality and update Home component)
          <h4>rating</h4>
          <input
            value={newItems.rating}
            onChange={(e) =>
              setNewItems({ ...newItems, rating: e.target.value })
            }
            type="range"
            className=""
            id="rating"
            max={5}
          />
          <button onClick={addItem}>submit</button>
        </form>
        <h1 className="text-2xl font-bold mb-4">
          App Peningkatan Proses Produksi
        </h1>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-slate-900">
                <th className="p-3 font-bold">Saran</th>
                <th className="p-3 font-bold">Foto</th>
                <th className="p-3 font-bold">Rating</th>
                <th className="p-3 font-bold">Acc</th>
                <th className="p-3 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterAcceptedItems.map((item) => (
                <tr
                  key={item.id}
                  className="text-center border-b border-gray-300"
                >
<<<<<<< HEAD
                  <td className="p-3">{item.saran}</td>
                  <td className="p-3">{item.foto}</td>
                  <td className="p-3">
                    <RatingStar rating={item.rating} />
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => updateItem(item.id, !item.acc)}
                      className="p-2 border border-slate-900 hover:bg-slate-900"
                    >
                      {item.acc ? '✅' : '❌'}
                    </button>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 border border-slate-900 hover:bg-slate-900"
                    >
                      X
                    </button>{' '}
                    <p>{item.acc}</p>
                  </td>
                </tr>
              ))}
=======
                  {item.acc ? '✅' : '❌'}
                </button>
              </td>
              <td className="p-3">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-2 border border-slate-900 hover:bg-slate-900"
                >
                  X
                </button> <p>{item.acc}</p>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-slate-900">
              <th className="p-3 font-bold">Saran</th>
              <th className="p-3 font-bold">Foto</th>
              <th className="p-3 font-bold">Rating</th>
              <th className="p-3 font-bold">Acc</th>
              <th className="p-3 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterAcceptedItems2.map(item => (
              <tr key={item.id} className="text-center border-b border-gray-300">
              <td className="p-3">{item.saran}</td>
              <td className="p-3"><Image src={item.foto}/> </td>
              <td className="p-3">
               <RatingStar rating={item.rating} />
             </td>
              <td className="p-3">
                <button
                  onClick={() => updateItem(item.id, !item.acc)}
                  className="p-2 border border-slate-900 hover:bg-slate-900"
                >
                  {item.acc ? '✅' : '❌'}
                </button>
              </td>
              <td className="p-3">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-2 border border-slate-900 hover:bg-slate-900"
                >
                  X
                </button> <p>{item.acc}</p>
              </td>
            </tr>
            ))}
>>>>>>> d12b253 (Add Firebase storage functionality and update Home component)
            </tbody>
          </table>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-slate-900">
                <th className="p-3 font-bold">Saran</th>
                <th className="p-3 font-bold">Foto</th>
                <th className="p-3 font-bold">Rating</th>
                <th className="p-3 font-bold">Acc</th>
                <th className="p-3 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterAcceptedItems2.map((item) => (
                <tr
                  key={item.id}
                  className="text-center border-b border-gray-300"
                >
                  <td className="p-3">{item.saran}</td>
                  <td className="p-3">
                    {' '}
                    <image />
                  </td>
                  <td className="p-3">
                    <RatingStar rating={item.rating} />
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => updateItem(item.id, !item.acc)}
                      className="p-2 border border-slate-900 hover:bg-slate-900"
                    >
                      {item.acc ? '✅' : '❌'}
                    </button>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 border border-slate-900 hover:bg-slate-900"
                    >
                      X
                    </button>{' '}
                    <p>{item.acc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="/login">
            <p className="p-2 border border-slate-900 hover:bg-slate-900">
              Login
            </p>
          </Link>
          <Link href="/register">
            <p className="p-2 border border-slate-900 hover:bg-slate-900">
              register
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
