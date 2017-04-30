import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Ltoform extends Component {
    constructor(props){
    	super(props);
    	this.state={
    		ltoaszama: '1',
    		ltobszama: '4'
    		};
    }


	Rogzites(event){
		event.preventDefault();
		var ltoa=this.state.ltoaszama;
		var ltob=this.state.ltobszama;
		console.log(ltoa,ltob);
		Meteor.call('addRegister', this.state, (error, result)=> {
			if (error) {
				console.log(error.message),
				console.log(error.details)
				if	(result)
					console.log(result);
			} else {
				browserHistory.push('/ltolist');
			}
		});
	}

	ActValue(event) {
		const value = event.target.value;
		const name = event.target.name;
    	this.setState({[name]: value});
    	console.log(name);
    	console.log(value);
  	}

    render() {
        return (
    			<div>
    				<h1>Rögzítés</h1>
    				<form className="form-horizontal" onSubmit={this.Rogzites.bind(this)}>
    					<select name="ltoaszama" value={this.state.value} onChange={this.ActValue.bind(this)} className="form-control">
	    					<option value="1">1</option>
	    					<option value="2">2</option>
	    					<option value="3">3</option>
	    					<option value="4">4</option>
	    					<option value="5">5</option>
	    					<option value="6">6</option>
	    					<option value="7">7</option>
	    				</select>
	    				<select name="ltobszama" value={this.state.value} onChange={this.ActValue.bind(this)} className="form-control">
	    					<option value="1">1</option>
	    					<option value="2">2</option>
	    					<option value="3">3</option>
	    					<option value="4">4</option>
	    					<option value="5">5</option>
	    					<option value="6">6</option>
	    					<option value="7">7</option>
	    				</select>
	    				<button type="submit" className="btn btn-raised btn-primary">Ment</button>
	    			</form>
    			</div>
        );
    }
}

export default Ltoform;

