import { useState, useEffect } from 'react'

export default function Test(props: { walletOfOwner: (...args: any) => [], tokenURI: (...args: any) => []}) {
    const [input, handleInput] = useState('')
    const [tokens, setTokens] = useState<any[]>([])
    const [properties, setProperties] = useState<any[]>([])
    const [featured, setFeatured] = useState<any>()

    const handleSubmit = async () => {
        try {
            let walletTokens = await props.walletOfOwner(input)
            setTokens(walletTokens.map(t => Number(t)))
        }
        catch {}
    }

    const handleExit = () => {
        setTokens([])
        setProperties([])
    }

    const fetchTraits = async (token: number | undefined) => {
        const nft = await props.tokenURI(token)
        let url = "https://gateway.pinata.cloud/ipfs/" + nft.slice(7)
        const response = await fetch(url)
        if(!response.ok) throw new Error(response.statusText)
        const json = await response.json()
        setFeatured(token)
        setProperties(json.attributes)
    }

    const renderInput = () => {
        if (tokens.length === 0) {
            return (
                <div className="wallet-checker-container">
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
                </div>
            )
        }
    }

    const renderTokens = () => {
        if (tokens.length > 0) { 
            return (
                <div className="wallet-checker-container">
                    <div className="wallet-checker-tokens-header">{`${input.slice(0, 5)}...${input.slice(-4)}`}</div>
                    <div className="wallet-checker-tokens">
                        {tokens.map((token: number, key: any) => {
                            return (
                                <div className="token-container" key={key} onClick={() => fetchTraits(token)}>
                                    <img 
                                        className="token-img" 
                                        src={`https://gateway.ipfs.io/ipfs/QmU6CBfcvrpUSUb2RJtAQkGMAvk7F7cp3ESfdNUU6zaX2x/${token}.png`} 
                                        />
                                    <div className="token-data">{`Puppy #${token}`}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }

    const renderProperties = () => {
        if (properties.length > 0) {
            return (
                <>
                <div className="featured-container">
                    <img className="featured-image" src={`https://gateway.ipfs.io/ipfs/QmU6CBfcvrpUSUb2RJtAQkGMAvk7F7cp3ESfdNUU6zaX2x/${featured}.png`}  />
                    <div className="featured-info">
                        <div className="featured-token">{`Puppy #${featured}`}</div>
                        <div className="featured-owner">
                            <div className="featured-owner-title">OWNER</div>
                            <div className="featured-owner-address">{`${input.slice(0, 5)}...${input.slice(-4)}`}</div>
                        </div>
                    </div>
                </div>
                <div className="wallet-checker-container">
                    <div className="wallet-checker-properties-header">Properties</div>
                    <div className="wallet-checker-properties">
                        {properties.map((category, key) => {
                            let { trait_type, value } = category;
                            return (
                                <div className="property" key={key}>
                                    <div className="property-type">{trait_type}</div>
                                    <div className="property-value">{value}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </>
            )
        }
    }

    const renderButton = () =>  {
        if (tokens.length > 0) {
            return (
                <div onClick={() => handleExit()} className="exit">EXIT</div>
            )
        }
    }

    return (
        <>
            {renderButton()}
            {renderInput()}
            {renderTokens()}
            {renderProperties()}
        </>
    )
}