import React from 'react';
import { IndexLink, Link } from 'react-router';
import NavItem from '../components/navitem.js';

const Mainlayout=({children})=>(
	<div>
		<nav className="navbar navbar-default navbar-static-top" role="navigation">
			<div className="container">
				<a className="navbar-brand" href="#">céglogo</a>
				<ul className="nav navbar-nav">
						<NavItem index={true} to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</NavItem>
						<NavItem to="ltoform" activeClassName="active">LTO rögzítés</NavItem>
						<NavItem to="ltolist" activeClassName="active">LTO lista</NavItem>
						<NavItem to="loginpage" activeClassName="active">Belépés(teszt)</NavItem>
				</ul>
			</div>
		</nav>
		{children}		
	</div>
);

export default Mainlayout;
