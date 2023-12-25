import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAtgs6L7VdQLd_GssVI8oxvVDaqAoewWg0',
  authDomain: 'adoreu-photoboot.firebaseapp.com',
  projectId: 'adoreu-photoboot',
  storageBucket: 'adoreu-photoboot.appspot.com',
  messagingSenderId: '306318863956',
  appId: '1:306318863956:web:fbf0721d4db1c0160747c1',
  measurementId: 'G-QN1CZ1HFM4',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app, 'gs://adoreu-photoboot.appspot.com')
const auth = getAuth(app)

export { db, storage, auth }
