"use client"

import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseconfig/fireauth';
 

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return() => unsubscribe();
  }, []);

  return user
}
