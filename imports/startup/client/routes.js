import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Meteor} from 'meteor/meteor';

import Mainlayout from '../../ui/layouts/mainlayout.js';
import Ltoform from '../../ui/components/ltoform.js';

Meteor.startup(()=>{
	render(
		<Router history={ browserHistory }>
			<Route path="/" component={Mainlayout}>
				<Route path="/ltoform" component={Ltoform}/>
			</Route>
		</Router>,
		document.getElementById('render-target')
		);
});