import React from 'react';
import { IndexLink, Link } from 'react-router';

const Mainlayout=({children})=>(
	<div>
		<nav className="navbar navbar-default navbar-static-top" role="navigation">
			<div className="container">
				<a className="navbar-brand" href="#">céglogo</a>
				<ul className="nav navbar-nav">
					<li>
						<IndexLink to="/" activeClassName="active">Home</IndexLink>
					</li>
					<li>
						<Link to="/ltoform" activeClassName="active">LTO rögzítés</Link>
					</li>
					<li>
						<Link to="/ltolist" activeClassName="active">LTO lista</Link>
					</li>
					<li>
						<Link to="/loginpage" activeClassName="active">Belépés(teszt)</Link>
					</li>
				</ul>
			</div>
		</nav>
		{children}		
	</div>
);

export default Mainlayout;
