import { useState, useEffect } from 'react'


export default function Test(props: { walletOfOwner: (...args: any) => [] }) {
    const [input, handleInput] = useState('')
    const [tokens, setTokens] = useState<any[]>([])

    const handleSubmit = async () => {
        try {
            let walletTokens = await props.walletOfOwner(input)
            setTokens(walletTokens.map(t => Number(t)))
        }
        catch {}
    }

    const renderTokens = () => {
        if (tokens.length > 0) {
            return (
                <div className="wallet-checker-tokens">
                    {tokens.map((token: number, key: any) => {
                        return (
                            <div className="token-container" key={key}>
                                <img 
                                    className="token-img" 
                                    src={`https://gateway.ipfs.io/ipfs/QmU6CBfcvrpUSUb2RJtAQkGMAvk7F7cp3ESfdNUU6zaX2x/${token}.png`} 
                                    />
                                <div className="token-data">{`Puppy #${token}`}</div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    const renderInput = () => {
        return (
            <div className="wallet-checker-search">
                <div className="wallet-checker-title">PUPPY VAULT</div>
                <div className="wallet-checker-subtitle">Enter your public wallet address (no ENS) to see your pups!</div>
                <input
                    className="wallet-checker-input"
                    type="text"
                    placeholder="0x..."
                    onChange={(e) => handleInput(e.target.value)}
                />
                <button className="wallet-checker-button" onClick={() => handleSubmit() }>Submit</button>
            </div>
        )
    }

    return (
        <div className="wallet-checker-container">
            {renderInput()}
            {renderTokens()}
        </div>
    )
}