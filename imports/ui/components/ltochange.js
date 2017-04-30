import React, { Component, PropTypes } from 'react';

class Ltochange extends Component {
        constructor(props) {
        super(props);
        this.state={
    		ltoaszama: {this.props.row.ltoAnumber},
    		ltobszama: {this.props.row.ltoBnumber},
    		};
    }

    console.log(this.props.row);

   addRecord(evet){
   	event.preventDefault();

   }

   newValue(event){
   	event.preventDefault();

   }

    render() {
        return (
            <div>
 	  			<h1>Napi csere rögzítése</h1>
    			<form className="form-horizontal" onSubmit={this.addRecord.bind(this)}>
    				<select name="ltoaszama" value={this.state.value} onChange={this.newValue.bind(this)} className="form-control">
	    				<option value="1">1</option>
	    				<option value="2">2</option>
	    				<option value="3">3</option>
	    				<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
	    			</select>
	    			<select name="ltobszama" value={this.state.value} onChange={this.newValue.bind(this)} className="form-control">
	    				<option value="1">1</option>
	    				<option value="2">2</option>
	    				<option value="3">3</option>
	    				<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
	    			</select>
	    			<button type="submit" className="btn btn-raised btn-primary">Rögzít</button>
	    		</form>
    		</div>
		);
	}
}
export default Ltochange;
