import { useState } from "react"

export default function Simulator () {

    const fadeDuration = 0
	const [version, setVersion] = useState(false)
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

        setVersion(!version)
    }

    return (
        <div className="simulator">
            <div className="simulator-info">
                <h1>SIMULATOR</h1>
                <p>Paloozas change your puppy forever. Each puppy in attendance will get some sort of trait modification, plus has the chance to transform into a 1/1! Each palooza your puppy attends is encapsulated in the metadata which may influence its evolution.</p>
            </div>
            <div className="simulator-action">
                <img style={{ transitionDuration: `${fadeDuration}ms` }} className={`simulator-img ${fadeTransition.fadeState}`} src={`/build/images/simulator-${version}.png`} />
                <button onClick={() => handleClick()}>PALOOZA!</button>
            </div>
        </div>
    )
}