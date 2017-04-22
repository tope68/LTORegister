import {Meteor} from 'meteor/meteor';
import LTOs from './collection.js';

Meteor.methods({
	addRegister({ltoa, ltob}) {
		// adat validálás valamivel


	  /*  if (! Meteor.userId()) {
      		throw new Meteor.Error('not-authorized'); */
    }

    return LTOs.insert({
    	actualDate: new Date(),
    	ltoAnumber: ltoa,
    	ltoBnumber: ltob,
    	status: 'Aktív',
    	// user: Meteor.userId()
    });
 
});