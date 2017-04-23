import React, { Component } from 'react';
import LTOs from '../../api/ltos/collection.js';

class Ltolist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<h2>Lista</h2>
            	{console.log(LTOs.find({}).fetch())}
            </div>
   )}
}

export default Ltolist;

