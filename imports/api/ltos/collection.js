import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const LTOs = new Mongo.Collection("ltos");

const LTOsSchema = new SimpleSchema ({
	actualDate: {
		type: Date,
		autoValue: function () {
			 return new Date();
		}
	},
	ltoAnumber: {
		type: SimpleSchema.Integer,
		min: 1,
		max: 23,
	},
	ltoBnumber: {
		type: SimpleSchema.Integer,
		min: 1,
		max: 23,
	},	
	changeDate: {
		type: Date,
		autoValue: function () {
			 return new Date();
		}
	},	
	changeBy: {
		type: String,
		// Meteor.user()
	},
	status: {
		type: String,
		allowedValues: ['Aktív', 'Lezárt'],
	}	
});

LTOs.attachSchema(LTOsSchema);

export default LTOs;