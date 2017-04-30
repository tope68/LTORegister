import {Meteor} from 'meteor/meteor';
import LTOs from './collection.js';

Meteor.methods({
	addRegister: ({ltoaszama, ltobszama, oldid}) => {
		// adat validálás valamivel


	  /*  if (! Meteor.userId()) {
      		throw new Meteor.Error('not-authorized'); */
     	var result = LTOs.insert({
    		actualDate: new Date(),
	    	ltoAnumber: ltoaszama,
	    	ltoBnumber: ltobszama,
	    	status: 'Aktív',
	    	// user: Meteor.userId() de most csak tesztként valami
	    	changeBy: 'aktualis user'
    	},(error,newid)=>{
        if (!error){
          LTOs.update({_id:oldid},{$set:{status:'Lezárt'}});
        }
      });

    },
    	
});
