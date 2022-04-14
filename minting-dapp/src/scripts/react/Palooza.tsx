import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

export default function Palooza(props: { walletTokens: number[] }) {
    const [users, setUsers] = useState<any[]>([])
    const usersCollectionRef = collection(db, 'users')
    const getTokens = async () => {
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const updateUser = async (id: string, bool: boolean, token: number) => {
        const userDoc = doc(db, "users", id)
        const newFields = {
            tokens: {
                ...users[0].tokens,
                [token]: bool
            }
        };
        setUsers([
            {
                tokens: {
                    ...users[0].tokens,
                    [token]: bool
                },
                id,
            }
        ])
        await updateDoc(userDoc, newFields)
    }

    useEffect(() => {
        getTokens()
    }, [])

    const renderItems = () => {
        if (users.length > 0) {
            return (
                <>
                    {props.walletTokens.map((token: number, key: any) => {
                        let buttonName = users[0].tokens[token] ? 'Leave Party' : 'Enter Party'
                        let opacity = users[0].tokens[token] ? 'opacity' : ''
                        return (
                            <div className="tokens" key={key}>
                                <div className="tokens-img-wrapper">
                                    <img 
                                        className={`tokens-img ${opacity}`} 
                                        src={`https://gateway.ipfs.io/ipfs/QmU6CBfcvrpUSUb2RJtAQkGMAvk7F7cp3ESfdNUU6zaX2x/${token}.png`} 
                                        />
                                </div>
                                <div className="tokens-data">{`token ID: ${token}, bool: ${users[0].tokens[token]}`}</div>
                                <button className="tokens-btn" onClick={() => updateUser(users[0].id, !users[0].tokens[token], token) }>{buttonName}</button>
                            </div>
                        )
                    })}
                </>
            )
        }
    }

    return (
        <div className="tokens-container">{renderItems()}</div>
    )
}