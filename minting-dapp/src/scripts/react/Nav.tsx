import { useState } from "react"
import { NavLink } from 'react-router-dom';

export default function Nav () {

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
					</div>
				</div>
				<div className="right">
				<a href="https://twitter.com/puppypaloozanft" target="_blank" rel="noopener noreferrer" className="icon"><img src="/build/images/twitter.svg" /></a>
					<a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className="icon"><img src="/build/images/opensea.svg" /></a>
					<a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="icon"><img src="/build/images/medium.svg" /></a>
					<a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon"><img src="/build/images/github.svg" /></a>
				</div>
			</div>
          	{menuStatus ? <div className="menu">
			  	<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink>
				<NavLink to="/vault" className={({ isActive }) => (isActive ? 'active' : '')}>VAULT</NavLink>
				<NavLink to="/palooza" className={({ isActive }) => (isActive ? 'active' : '')}>PALOOZA</NavLink>
			</div> : null}
        </>
    )
}