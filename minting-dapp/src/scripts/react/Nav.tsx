import { useState } from "react"
import { NavLink } from 'react-router-dom';

export default function Nav (props: { connectWallet: () => Promise<any> }) {

	const [menuStatus, setMenuStatus] = useState(false)

    return (
        <>
          	<div className="nav">
				<div className="left">
					<div className="hamburger" onClick={() => setMenuStatus(!menuStatus)}>☰</div>
					<a href="/"><img id="logoNav" src="/build/images/icon.png" alt="Logo" /></a>
					<div className="links">
						<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink>
						<NavLink to="/vault" className={({ isActive }) => (isActive ? 'active' : '')}>VAULT</NavLink>
						<NavLink to="/palooza" className={({ isActive }) => (isActive ? 'active' : '')}>PALOOZA</NavLink>
						<button onClick={() => props.connectWallet()}>Connect</button>
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
			  	<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink>
				<NavLink to="/vault" className={({ isActive }) => (isActive ? 'active' : '')}>VAULT</NavLink>
				<NavLink to="/palooza" className={({ isActive }) => (isActive ? 'active' : '')}>PALOOZA</NavLink>
				<a onClick={() => props.connectWallet()}>CONNECT</a>
			</div> : null}
        </>
    )
}