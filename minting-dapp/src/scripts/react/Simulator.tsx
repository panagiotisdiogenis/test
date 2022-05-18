import { useState } from "react"

export default function Simulator () {

    const fadeDuration = 0
	const [token, setToken] = useState(10)
    const [fadeTransition, setFadeTransition] = useState<any>({ fadeTransition: null, fadeState: 'fade-in' })

    const handleClick = () => {

        const timeout = setTimeout(() => {
            setFadeTransition({
                fadeTransition: null,
                fadeState: 'fade-in'
            })
        }, fadeDuration);
    
        clearTimeout(fadeTransition);

        setFadeTransition({
            fadeTransition: timeout,
            fadeState: 'fade-out'
        })

        setToken(Math.floor(Math.random() * 10) + 1)
    }

    return (

          	<div className="simulator">
				<div className="simulator-info">
                    <h1>SIMULATOR</h1>
                    <p>Paloozas change your puppy forever. Each puppy in attendance will get some sort of trait modification, plus has the chance to transform into a 1/1! Each palooza your puppy attends is encapsulated in the metadata which may influence its evolution.</p>
				</div>
				<div className="simulator-action">
                    <img style={{ transitionDuration: `${fadeDuration}ms` }} className={`simulator-img ${fadeTransition.fadeState}`} src={`https://gateway.ipfs.io/ipfs/QmXL2B3Sux5GSJ78PncGEpobmCmDtA4zBybkQEggdtmNYe/${token}.png`} />
                    <button onClick={() => handleClick()}>PALOOZA!</button>
				</div>
			</div>

    )
}