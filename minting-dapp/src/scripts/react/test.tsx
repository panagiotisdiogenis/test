import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

interface Props {
    userAddress: string|null;
}

// @ts-ignore: Unreachable code error 
export default function Test(props) {
    const [users, setUsers] = useState<any[]>([]);
    const usersCollectionRef = collection(db, 'users');
    const getTokens = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    // @ts-ignore: Unreachable code error 
    const updateUser = async (id, bool, token) => {
        const userDoc = doc(db, "users", id)
        const newFields = { 
            tokens: {
                ...users[0].tokens,
                [token]: bool
            } 
        };
        getTokens()
        await updateDoc(userDoc, newFields)
    }

    useEffect(() => {
        getTokens()
    }, [props.walletTokens])

    const renderItems = () => {
        // @ts-ignore: Unreachable code error 
        if (users.length > 0) {
            // console.log(JSON.stringify(users[0].tokens))
            return (
                <>
                {props.walletTokens.map((token: number, key: any) => {
                    let buttonName = users[0].tokens[token] ? 'Leave Party' : 'Enter Party';
                    return (
                        <>
                            <li key={key}>{`token ID: ${token}, bool: ${users[0].tokens[token]}`}</li>
                            {/* @ts-ignore: Unreachable code error */}
                            <button onClick={() => updateUser(users[0].id, !users[0].tokens[token], token) }>{buttonName}</button>
                        </>
                    )
                })}
                </>
            )
        }
    }

    return (
        <>{renderItems()}</>
    )
}