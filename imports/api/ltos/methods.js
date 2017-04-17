Meteor.methods({
	addRegister({ltoa, ltob}) {
		// adat validálás valamivel


	  /*  if (! Meteor.userId()) {
      		throw new Meteor.Error('not-authorized'); */
    }

    LTOs.insert({
    	actualDate: new Date(),
    	ltoAnumber: ltoa,
    	ltoBnumber: ltob,

    });
 
});