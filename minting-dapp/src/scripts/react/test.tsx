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
                        <div className="party" key={key}>
                            <img className="party-img" src={`https://gateway.ipfs.io/ipfs/QmU6CBfcvrpUSUb2RJtAQkGMAvk7F7cp3ESfdNUU6zaX2x/${token}.png`} height="100" width="100" />
                            <div className="party-data">{`token ID: ${token}, bool: ${users[0].tokens[token]}`}</div>
                            {/* @ts-ignore: Unreachable code error */}
                            <button className="party-btn" onClick={() => updateUser(users[0].id, !users[0].tokens[token], token) }>{buttonName}</button>
                        </div>
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