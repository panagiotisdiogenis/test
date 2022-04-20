import { useState } from "react"

export default function Home () {

    const [sections, setSections] = useState<any[]>([false, false, false])

    const toggle = (i: number) => {
        let copy = [...sections]
        copy[i] = !copy[i]
        setSections(copy)
    }

    const faqs : any = {
        "What are puppies?": "Puppy Palooza is a generative collection of #,### NFTs. Puppies are randomly curated from 100+ different traits. Each puppy is unique and minted as an NFT on the Ethereum blockchain. Puppies are dynamic NFTs and can change their traits over time by attending special events. Special events allows puppies to inject their own art into the collection.",
        "What is the technology?": "Puppies are ERC-721A tokens on the Ethereum blockchain. Special events, will update the metadata and image of each corresponding puppy on IPFS. The metadata will save a history of your evolved puppy, and all previous versions will be hosted on IPFS.",
        "What is a Palooza?": "Special events are dynamic virtual events on the blockchain that evolve your puppy forever! Each event is exclusive but beware - your puppy will not come back the same.",
        "Do Palooza's cost gas?": "Nope. It's free! You only need to connect your wallet to verify ownership (which doesn't have any gas fees). After the Palooza, we will update the contract to connect the new metadata on IPFS.",
        "Wen Puppy Palooza?": "Don't ask us. Ask the puppies. Puppy Palooza time & dates are spontaneous."
    }

    const renderFAQ = () => {
        return (
            <div className="faq">
                <h1>FAQ</h1>
                {Object.keys(faqs).map((faq, i) => {
                    return (
                        <div className="section" onClick={() => toggle(i)}>
                            <h2>{faq}</h2>
                            {sections[i] ? <p>{faqs[faq]}</p> : null}
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderSocial = () => {
        return (
            <div className="social-container">
                <div className="medium">Medium</div>
                <div className="opensea">OpenSea</div>
                <div className="twitter">Twitter</div>
                <div className="github">Github</div>
            </div>
        )
    }

    return (
        <>
            <div className='confetti-container'>
                {[...Array(10)].map(() => <div className="confetti"></div>)}
            </div>
            <div className='header'>
                <h1>Puppy</h1>
                <h2>PALOOZA</h2>
                <h3>Puppies Are Dynamic NFTs That Evolve By Attending Paloozas.</h3>
                <button className='twitter'>Twitter</button>
            </div>
            <div className="pup">
                {[...Array(9)].map((item, i) => {
                    return (
                        <img className="pup-img" src={`https://gateway.ipfs.io/ipfs/QmXL2B3Sux5GSJ78PncGEpobmCmDtA4zBybkQEggdtmNYe/${i+1}.png`} />
                    )
                })}
            </div>
            {renderFAQ()}
            {renderSocial()}
        </>
    )
}