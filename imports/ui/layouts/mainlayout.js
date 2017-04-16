import React from 'react';

const Mainlayout=({children})=>(
	<div>
		<nav className="navbar navbar-default navbar-static-top" role="navigation">
			<div className="container">
				<a className="navbar-brand" href="#">céglogo</a>
				<ul className="nav navbar-nav">
					<li className="active">
						<a href="/ltoform">LTO lista</a>
					</li>
					<li>
						<a href="/">menü2</a>
					</li>
				</ul>
			</div>
		</nav>
		{children}		
	</div>
);

export default Mainlayout;
