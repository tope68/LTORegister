import {Meteor} from 'meteor/meteor';
import LTOs from './collection';

Meteor.methods({
	addRegister: ({ltoa, ltob}) => {
		// adat validálás valamivel


	  /*  if (! Meteor.userId()) {
      		throw new Meteor.Error('not-authorized'); */
    },

    'LTOs.insert': () => {
        return {
        	actualDate: new Date(),
        	ltoAnumber: ltoa,
        	ltoBnumber: ltob,
        	// user: Meteor.userId()
        } 
    }
 
});