'use client'
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/image 4 (Traced).png'

 export default function Navbar() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <>
        <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-8 w-auto"
                src={Logo}
                alt="Your Company"
                width="100"
                height="100"
                />
            </div>
            <div className="hidden sm:ml-auto mx-auto sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  href="/"
                  className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                  >
                  HOME
                </Link>
                <Link
                  href="/catalogue"
                  className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
                  >
                  CATALOGUE
                </Link>
                <Link
                  href="/review"
                  className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
                  >
                  REVIEW
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
                  >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <div className="flex items-center ml-auto">
              <div className="flex items-center ml-auto">
                    <Link href="/login">
                    <button className="border-2 border-b-4 border-blue-900 bg-white text-blue-900 rounded-full px-4 py-2 text-sm font-medium">
                      LOGIN
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
            >
            HOME
          </a>
          <a
            href="#"
            className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
            >
            CATALOGUE
          </a>
          <a
            href="#"
            className="text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
            >
            REVIEW
          </a>
          <a
            href="#"
            className="text-blue-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
            CONTACT
          </a>
        </div>
      </div>
    </>
    )
                }