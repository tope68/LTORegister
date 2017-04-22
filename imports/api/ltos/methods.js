import {Meteor} from 'meteor/meteor';
import LTOs from './collection.js';

Meteor.methods({
	addRegister: ({ltoa, ltob}) => {
		// adat validálás valamivel


	  /*  if (! Meteor.userId()) {
      		throw new Meteor.Error('not-authorized'); */
    },

<<<<<<< HEAD
    'LTOs.insert': () => {
        return {
        	actualDate: new Date(),
        	ltoAnumber: ltoa,
        	ltoBnumber: ltob,
        	// user: Meteor.userId()
        } 
    }
=======
    return LTOs.insert({
    	actualDate: new Date(),
    	ltoAnumber: ltoa,
    	ltoBnumber: ltob,
    	status: 'Aktív',
    	// user: Meteor.userId()
    });
>>>>>>> a5430e43c238b1f962b784ad8bf7ce36e4d4ca23
 
});