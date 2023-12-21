"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {collection,
  addDoc,
  getDoc,
  updateDoc,
  query,
  setDoc,
  onSnapshot,
  deleteDoc,
  doc} from 'firebase/firestore';
  import { db } from './firebase';
import Link from 'next/link';
  
  const RatingStar = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
       if (i < rating) {
         stars.push(<svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.94L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.94L5.82 21L12 17.27Z"/></svg>);
       } else {
         stars.push(<svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.94L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.94L5.82 21L12 17.27Z"/></svg>);
       }
    }
    return <div className="flex space-x-1">{stars}</div>;
   };


     

export default function Home() {
  const [items, setItems] = useState([{ saran: '', foto: '', rating: '', acc: false }]);
  const [newItems, setNewItems] = useState({ saran: '', foto: '', rating: '', acc: false });
  const [total, setTotal] = useState(0);


  const addItem = async (e) =>  {
    e.preventDefault();
    if (newItems.saran !== '') {
      await addDoc(collection(db, 'items'), {
        saran: newItems.saran.trim(),
        foto: newItems.foto,
        rating: newItems.rating,
        acc: newItems.acc = false
      });
      setNewItems({ saran: '', foto: '', rating: '', acc: false });
    }
  };


  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let temp = [];

      querySnapshot.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id });
      });
      setItems(temp);

      // Read total from temp
      const calculateTotal = () => {
        const totalPrice = temp.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotal(totalPrice);
      };
      calculateTotal();
    });

    return () => unsubscribe();
  }, []);

  const updateItem = (id, acc) => {
    setItems(items.map(item => item.id === id ? { ...item, acc } : item));
 };
 const filterAcceptedItems = items.filter(item => item.acc);
 const filterAcceptedItems2 = items.filter(item => !item.acc);

 const deleteItem = async (id) => {
  await deleteDoc(doc(db, 'items', id));
};

  return (
    <>
      <div className="p-10 grid items-center bg-black">
        <form action="">
          <h4>saran</h4>
          <input
            value={newItems.saran}
            onChange={(e) => setNewItems({ ...newItems, saran: e.target.value })}
            type="text"
            className=""
            id="saran"
            placeholder="silahkan di isi"
          />
          <h4>foto</h4>
          <input value={newItems.foto}
          onChange={(e) => setNewItems({ ...newItems, foto: e.target.value })}
          type="file" className="" id="foto" />
          <h4>rating</h4>
          <input value={newItems.rating}
           
          onChange={(e) => setNewItems({ ...newItems, rating: e.target.value })}
          type="range" className="" id="rating" max={5} />
          <button onClick={addItem}>submit</button>
        </form>
      <h1 className="text-2xl font-bold mb-4">App Peningkatan Proses Produksi</h1>
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
            {filterAcceptedItems.map(item => (
              <tr key={item.id} className="text-center border-b border-gray-300">
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
                </button> <p>{item.acc}</p>
              </td>
            </tr>
            ))}
            </tbody>
        </table>
        <Link href="/login"><p className="p-2 border border-slate-900 hover:bg-slate-900">Login</p></Link>
        <Link href="/register"><p className="p-2 border border-slate-900 hover:bg-slate-900">register</p></Link>
      </div>
      </div>
    </>
  );
            }
