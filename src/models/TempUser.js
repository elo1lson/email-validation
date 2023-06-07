import { Schema, model } from "mongoose";

const tempUserSchema = new Schema({
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	code: Number,
});

const tempUserModel = model("tempUser", tempUserSchema);

export default tempUserModel;
