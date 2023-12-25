import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon1 from '../../public/Group 82.png'

export default function contact() {
  return (
    <>
      <div className="bg-white">
        
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-64 max-w-7xl flex justify-between items-center py-16 sm:py-16 lg:py-28">
            <div className="w-full lg:w-1/2 justify-center">
              <Image
                className="h-72 items-center justify-center r-0"
                src={Icon1}
                alt="Your Company"
                width={300}
                height={300}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font italic tracking-tight text-blue-900 sm:text-5xl">
                  TOOK INTEREST ?
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-400 sm:text-2xl">
                  WE WOULD LOVE TO HEAR FROM YOU, LET`S WORK TOGETHER !
                </p>
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-x-6">
                  <Link
                    href="https://wa.me/0"
                    className="border-2 border-b-4 border-blue-900 bg-white text-blue-900 rounded-full px-4 py-2 text-sm font-medium lg-left sm:text-xl"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
