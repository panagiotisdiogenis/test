import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import Dapp from './Dapp'

export default function Test() {
  const [users, setUsers] = useState<any[]>([]);
  const [newToken, setNewToken] = useState<number>(0);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {

    const getTokens = async () => {
      const data = await getDocs(usersCollectionRef);
      data.docs.map((doc) => {
        // console.log(doc.data())
      })
      // console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getTokens()
  }, [])

  const createUser = async () => {
    await addDoc(usersCollectionRef, { token: newToken })
  }

  return (
    <div>
        <input 
          type="number" 
          onChange={(e) => {
            setNewToken(Number(e.target.value))
          }}
          placeholder="Token ID"
          >
        </input>
        <button onClick={createUser}>Enter Palooza!</button>
        {users.map((user, key) => {
            return (
              <div key={key}>
                <li>{user.token}</li>
                <li>{user.id}</li>
              </div>
            ) 
        })}
        <Dapp/>
      </div>
  )
}