"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { db } from '../firebaseconfig/firebase';
import { collection , query } from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore';

export default function App() {
  const session = useSession();
  const [users, loading, error] = useCollection(query(collection(db, 'users')));
  return (
    <>
    <div className="p-8">
      <div className='text-white'>{session?.data?.user?.email }</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
    </div>
    </>
  )
}
