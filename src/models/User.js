import { Schema, SchemaType, SchemaTypes } from "mongoose";

const User = new Schema("user", {
	name: SchemaTypes.String,
	email: SchemaTypes.String,
	lastName: SchemaTypes.String,
});

export default User;
