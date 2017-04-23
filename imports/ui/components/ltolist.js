import React, { Component } from 'react';
import LTOs from '../../api/ltos/collection.js';

class Ltolist extends Component {
    constructor(props) {
        super(props);
    }

    ltodatas() {
    	return LTOs.find().fetch();
    }

    render() {
        return (
        	<div>
            	<h2>Lista</h2>
               	{console.log(LTOs.find({}).fetch())}
            	<ul>
            		{this.ltodatas().map((ltodata) => {
            			return <li key={ltodata._id}>
            						{actualdate=moment(ltodata.actualDate).format('YYYY.MM.DD')} {ltoanumber=ltodata.ltoAnumber} {ltobnumber=ltodata.ltoBnumber} {ltostatus=ltodata.status} {actualuser=ltodata.changeBy} {changedate=moment(ltodata.changeDate).format('YYYY.MM.DD, HH:mm')}
            					</li>
               		})}
               	</ul> 
            </div>
   )}
}

export default Ltolist;

