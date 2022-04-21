import { useState } from "react"

export default function Nav () {

	const [menuStatus, setMenuStatus] = useState(false)

    return (
        <>
          	<div className="nav">
				<div className="left">
					<div className="hamburger" onClick={() => setMenuStatus(!menuStatus)}>☰</div>
					<a href="/"><img id="logoNav" src="/build/images/icon.png" alt="Logo" /></a>
					<div className="links">
						<a href="/">HOME</a>
						<a href="/">VAULT</a>
						<a href="/">PALOOZA</a>
					</div>
				</div>
				<div className="right">
					<a className="icon"><img src="/build/images/opensea.svg" /></a>
					<a className="icon"><img src="/build/images/medium.svg" /></a>
					<a className="icon"><img src="/build/images/twitter.svg" /></a>
					<a className="icon"><img src="/build/images/github.svg" /></a>
				</div>
			</div>
          	{menuStatus ? <div className="menu">
				<a href="/">HOME</a>
				<a href="/">VAULT</a>
				<a href="/">PALOOZA</a>
			</div> : null}
        </>
    )
}