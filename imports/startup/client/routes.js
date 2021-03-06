import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Meteor} from 'meteor/meteor';

import Mainlayout from '../../ui/layouts/mainlayout.js';
import Ltoform from '../../ui/components/ltoform.js';
import Ltolist from '../../ui/components/ltolist.js';
import Ltochange from '../../ui/components/ltochange.js';
import Login from '../../ui/pages/loginpage.js';
import Signup from '../../ui/pages/signuppage.js';

Meteor.startup(()=>{
	render(
		<Router history={ browserHistory }>
			<Route path="/" component={Mainlayout}>
				<Route path="loginpage" component={Login}/>
				<Route path="signuppage" component={Signup}/>
				<Route path="ltoform" component={Ltoform}/>
				<Route path="ltolist" component={Ltolist}/>
				<Route path="ltochange/:ltoa/:ltob/:oldid" component={Ltochange}/>
			</Route>
		</Router>,
		document.getElementById('render-target')
		);
});