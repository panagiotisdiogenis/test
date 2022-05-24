import { useState } from "react"
import { NavLink } from 'react-router-dom'
import Simulator from "./Simulator"

export default function Home () {

    const [sections, setSections] = useState<any[]>([false, false, false])

    const toggle = (i: number) => {
        let copy = [...sections]
        copy[i] = !copy[i]
        setSections(copy)
    }

    const faqs: any = {
        "What are puppies?": "Puppy Palooza is a generative collection of #,### NFTs. Puppies are randomly curated from 100+ different traits. Each puppy is unique and minted as an NFT on the Ethereum blockchain. Puppies are dynamic NFTs and can change their traits over time by attending special events. Special events allows puppies to inject their own art into the collection.",
        "Puppy Technology?": "Puppies are ERC-721A tokens on the Ethereum blockchain. Special events, will update the metadata and image of each corresponding puppy on IPFS. The metadata will save a history of your evolved puppy, and all previous versions will be hosted on IPFS.",
        "What Palooza?": "Special events are dynamic virtual events on the blockchain that evolve your puppy forever! Each event is exclusive but beware - your puppy will not come back the same.",
        "How Palooza?": "Puppies are dynamic NFTs and embody a whole new approach to the art space. Special events allow collectors to evolve their puppies and be part of a dynamic web3 community. Community members will have the ability to contribute their own art that may be selected to join the collection — meaning your paw print can forever live in the history of Puppy Palooza!",
        "Do I have to be an artist?": "Nope. There are no credentials needed to submit artwork for the Palooza. This is an opportunity to share your creativity. We encourage everyone in the NFT community to have fun with this process and  produce whatever they like, it can be based on our existing art style OR it can be totally your own. Want to make a meme pup?? DO IT! Animated Pupper?? Now we’re talking… *Art Submissions will be screened before final integration into Palooza events. We have zero tolerance for any toxic behavior and will remove any submissions if necessary (we sincerely hope we don’t need to). Pups show love && love only.",
        "Should I bring my Puppy to the Palooza?": "The choice is yours! Special events change your puppy forever. Each puppy in attendance will get some sort of trait modification, plus has the chance to transform into a 1/1! Each palooza your puppy attends is encapsulated in the metadata which may influence its evolution. Every palooza is exclusive and offers exclusive traits. We feel that each and every pup has their own unique charm and we hope you agree!  If you love your pup and don’t want them to change, feel free to leave them at home, you never know what can happen at the Palooza…",
        "Do Palooza's cost gas?": "Nope. It's free! You only need to connect your wallet to verify ownership (which doesn't have any gas fees). After the Palooza, we will update the contract to connect the new metadata on IPFS.",
        "Why Puppies?": "We think long and hard, debate and argue over phone, text, and any platform you can name from discord to playstation lobbies, and choosing a representative for our first web3 project was no exception.",
        "Wen Puppy Palooza?": "Don't ask us. Ask the puppies. Puppy Palooza time & dates are spontaneous.",
        "Palooza Roadmap?": "As with all things Palooza, we like to under promise and over deliver. To get a sneak peak into our future and unique take on the Metaverse, please stay tuned for future community announcements."
    }

    const footerInfo: any = {
        "Vault": "The Puppy Vault is currently locked.",
        "Palooza": "The first Palooza hasn't been announced yet.",
        "Collaboration": "Want to collab with Puppy Palooza? Shoot us an inquiry.",
    }

    const renderFAQ = () => {
        return (
            <div className="faq">
                <h1>FAQ</h1>
                {Object.keys(faqs).map((faq, i) => {
                    return (
                        <div key={i} className="section" onClick={() => toggle(i)}>
                            <h2>{faq}</h2>
                            {sections[i] ? <p>{faqs[faq]}</p> : null}
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderTeam = () => {
        return (
            <div className="team-container">
                <h1>TEAM</h1>
                <div>
                    <a>
                        <img src="/build/images/team1.png" />
                        <h2>PAMP</h2>
                        <p>@pamp</p>
                    </a>
                    <a>
                        <img src="/build/images/team2.png" />
                        <h2>COMMUNITY</h2>
                        <p>X,XXX Pups</p>
                    </a>
                    <a>
                        <img src="/build/images/team3.png" />
                        <h2>RADESAI</h2>
                        <p>@radesai</p>
                    </a>
                </div>
            </div>
        )
    }

    const renderSocial = () => {
        return (
            <div className="social-container">
                <div className="social-wrapper">
                    <div>
                        <div className="social-header">
                            <span>PUPPY</span>
                            <span className="social-animate"> PALOOZA ©</span>
                        </div>
                        <a href="https://twitter.com/puppypaloozanft" target="_blank" rel="noopener noreferrer"><div className="twitter">Twitter</div></a>
                        <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer"><div className="opensea">OpenSea</div></a>
                        <a href="https://medium.com/" target="_blank" rel="noopener noreferrer"><div className="medium">Medium</div></a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><div className="github">Github</div></a>
                    </div>
                </div>
            </div>
        )
    }

    const renderSection = (title: any, info: any) => {
        return (
            <div className={`contact ${title.toLowerCase()}`}>
                <div className="wrapper">
                    <div>
                        <h1>{title}</h1>
                        <span>→</span>
                    </div>
                    <h2>{info}</h2>
                </div>
            </div>
        )
    }

    const renderFooter = () => {
        return (
            <>
                {Object.keys(footerInfo).map((title, i) => {
                    let path = i !== 2 ? `/${title.toLowerCase()}` : '/';
                    if (i === 2) return <a key={i} href="mailto:hello@puppypalooza.art">{renderSection(title, footerInfo[title])}</a>
                    return <NavLink key={i} to={path}>{renderSection(title, footerInfo[title])}</NavLink>
                })}
            </>
        )
    }

    return (
        <>
            <div className="wrapper">
                <div className='confetti-container'>
                    {[...Array(10)].map((c, key) => <div key={key} className="confetti"></div>)}
                </div>
                <div className='header'>
                    <h1>Puppy</h1>
                    <h2>PALOOZA</h2>
                    <h3>Puppies Are Dynamic NFTs That Evolve By Attending Paloozas.</h3>
                    <a href="https://twitter.com/puppypaloozanft" target="_blank" rel="noopener noreferrer">
                        <button className='twitter'>Twitter</button>
                    </a>
                </div>
                <div className="pup">
                    {[1,2,3,5,8,4,7,6,9].map((item, key) => {
                        return (
                            <img key={key} className="pup-img" src={`/build/images/tile${item}.png`} />
                        )
                    })}
                </div>
                {renderFAQ()}
                <Simulator />
                {renderTeam()}
            </div>
            {renderFooter()}
            {renderSocial()}
        </>
    )
}