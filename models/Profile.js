const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema({
	email: { type: String, required: true, unique: true },
	avatar: { type: String },
	name: { type: String, required: true, unique: true },
	cohort: { type: String, required: true },
	mobile: { type: String, required: true },
	adress: {
		street: { type: String, required: true },
		city: { type: String, required: true },
	},
	passwordHash: { type: String, required: true },
});

const ProfileModel = model("Profile", ProfileSchema);

module.exports = ProfileModel;
