import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, unique: true, required: true },
});

const User = model("user", userSchema);

export default User;
