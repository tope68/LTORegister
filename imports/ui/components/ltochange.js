import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';


class Ltochange extends Component {
    constructor(props) {
        super(props);
        this.state={
          ltoaszama: (parseInt(props.params.ltoa)==23) ? 1 : parseInt(props.params.ltoa)+1,
          ltobszama: (parseInt(props.params.ltob)==23) ? 1 : parseInt(props.params.ltob)+1,
          oldid:props.params.oldid
    	};
    }


   AddRecord(event){
    event.preventDefault();
    Meteor.call('addRegister', this.state, (error, result)=> {
      if (error) {
        console.log(error.message),
        console.log(error.details)
        if  (result)
          console.log(result);
      } else {
        // go(-1): bongeszo elozmenyekben visszalepunk, mert akkor nem szemeteljuk tele a history-t
        browserHistory.push('/ltolist');
      }
    });
   }

   NewValue(event){
    console.log(event);
    var value = event.target.value;
    console.log(value);
    this.setState({ [event.target.name] :value})
   }

    render() {
        return (
            <div>
 	  			<h1>Napi csere rögzítése</h1>
    			<form className="form-horizontal">
    				<select name="ltoaszama" value={this.state.ltoaszama} onChange={this.NewValue.bind(this)} className="form-control">
              			{Array(23).fill().map((_, i) => {return (<option value={i+1}>{i+1}</option>)} ) }
	    			</select>
	    			<select name="ltobszama" value={this.state.ltobszama} onChange={this.NewValue.bind(this)} className="form-control">
              			{Array(23).fill().map((_, j) => {return (<option value={j+1}>{j+1}</option>)} ) }
	    			</select>
	    			<button type="submit" onClick={this.AddRecord.bind(this)} className="btn btn-raised btn-primary">Rögzít</button>
	    		</form>
    		</div>
		);
	}
}
export default Ltochange;
