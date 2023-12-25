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
    <div className='text-white'>{session?.data?.user?.email }
    <div className="text-blue-900">
    <Image alt=""  className="mt-10" src="Frame 99.png"/>
    <div className="grid gap-4 grid-cols-2 mb-10 ">
    <div><p className="text-gray-600 pt-6 ml-10 mt-6 text-blue-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Quae quasi, repellat nam quis porro animi facere, tempora, quisquam fuga impedit 
    provident adipisci veritatis quas omnis. Possimus, fugiat commodi! Eos, illo?.</p></div>
    <div></div>
    <div></div>
    <div><p className="text-gray-600 pr-4 pt-6 mr-4 mt-6 text-blue-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Quae quasi, repellat nam quis porro animi facere, tempora, quisquam fuga impedit 
    provident adipisci veritatis quas omnis. Possimus, fugiat commodi! Eos, illo?.</p></div>
    </div>
    
    <div>
    <div className="text-center pt-5">
    <h1 className="text-2xl font-family italic">B &nbsp; E &nbsp;N &nbsp;E &nbsp;F &nbsp;I &nbsp;T &nbsp;S</h1>
    <Image alt="" className="lg-center" src="Subtract.png"/>
    <div className="flex flex-col space-y-4 mb-10">
    <div>CUSTOM FRAME</div>
    <div>BACKDROP</div>
    <div>UNLIMITED PHOTO+PRINT</div>
    <div>GIF & BOOMERANG</div>
    <div>SOFTCOPPIES VIA AIRDROP/EMAIL/GR CODE</div>
    <div>GET ALL PHOTOS FILE IN GOOGLE DRIVE</div>
    </div>
    </div>
    </div>
    
    <h1 className="text-l font-family italic ml-10">TRUSTED BY</h1>
    <div className=" grid grid-cols-8 text-center gap-x-15 mt-3 mb-10 border-2 border-blue-900">
    <div className="mt-2 mb-2">TED</div>
    <div className="mt-2 mb-2">GBF</div>
    <div className="mt-2 mb-2">Campus Event</div>
    <div className="mt-2 mb-2">Music Fest</div>
    <div className="mt-2 mb-2">Graduation Nite</div>
    <div className="mt-2 mb-2">Karaoke Party</div>
    <div className="mt-2 mb-2">Birthday party</div>
    <div className="mt-2 mb-2">TED</div>
    </div>
    
    <div className="grid grid-flow-row-dense grid-cols-3 mt-10 pt-10 text-center">
    <div className="col-span-2">
    <h1 className="text-2xl font-family italic"> G I A N T &nbsp;&nbsp; P A C K A G E </h1>
    <div className="flex flex-row ml-20  mt-4 mr-0 gap-20">
    <div className="basis-1/2">
    <h2>2 HOURS UNLIMITED</h2>
    <h2>1.749.000</h2>
    </div>
    <div className="basis-1/2">
    <h2>3 HOURS UNLIMITED</h2>
    <h2>2.199.000</h2>
    </div>
    <div className="basis-1/2">
    <h2>EXTRA TIME</h2>
    <h2>399.000</h2>
    </div>
    </div>
    </div>
    <div >
    <h1 className="text-2xl font-family italic"> T I N Y  P A C K A G E </h1>
    <h2 className="mt-4"> 2 HOURS UNLIMITED (50pcs 4r/100pcs 2r) </h2>
    <h2> 1.749.000 </h2>
    </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 text-center mb-10">
    <div >
    <Image alt="" className="mt-10 w-80 h-96 ml-10" src="Group 98.png"/>
    <h1>WEDDING - display the result of<br/>your photos documentation</h1>
    </div>
    <div>
    <Image alt="" className="mt-10 w-80 h-96  ml-10" src="Group 99.png"/>
    <h1>BIRTHDAY - makes unfotgettable <br/>memories with friends on your <br/>birthday</h1>
    </div>
    <div>
    <Image alt="" className="mt-10 w-80 h-96 ml-10" src="Group 100.png"/>
    <h1>WEDDING - share happiness with <br/> the beautiful memories on your <br/>special day</h1>
    </div>
    
    
    <div className="grid grid-cols-2 gap-4 mt-15 pt-10 text-center ">
    <div>
    WE WOULD LOVE TO HEAR FROM YOU <br/>
    LETS WORK TOGETHER 
    </div>
    <div>
    <button className=" border-2  border-solid rounded-full border-blue-900 mb-10"> <h1 className="mx-5 my-2">CONTACT</h1> </button>
    </div>
    
    <button className='text-white' onClick={() => signOut()}>Logout</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
    )
  }
  