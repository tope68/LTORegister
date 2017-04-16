import React, { Component } from 'react';


class Ltoform extends Component {
    constructor(props){
    	super(props);
    	this.state={value: '1'};
    }


	Rogzites(event){
		event.preventDefault();
		var ltoa=this.state.value.trim();
		console.log(ltoa);
	}

	ActValue(event) {
    	this.setState({value: event.target.value});
  	}

    render() {
        return (
    			<div>
    				<h1>Rögzítés</h1>
    				<form className="uj-rogzit" onSubmit={this.Rogzites.bind(this)}>
	    				<select value={this.state.value} onChange={this.ActValue.bind(this)} className="form-control">
	    					<option value="1">1</option>
	    					<option value="2">2</option>
	    					<option value="3">3</option>
	    				</select>
	    				<button type="submit" className="btn btn-raised btn-primary">Ment</button>
	    				<div className="form-group label-floating">
    						<label htmlFor="222" className="control-label">number</label>
    						<input className="form-control" id="222" type="number" min={this.state.value} max="23" />
  						</div>
    				</form>
    			</div>
        );
    }
}

export default Ltoform;

