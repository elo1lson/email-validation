import { Router } from "express";
import crypto from "crypto-js";
import pageName from "../utils/getPage.js";
import User from "../models/User.js";
const router = Router();

router.get("/", (req, res) => res.sendFile(pageName("login")));

router.post("/", (req, res) => {
	const { email, senha } = req.body;
	const passwordHash = crypto.SHA256(senha + process.env.SALT).toString();
	const checkPassword = (password) => password === passwordHash;
	User.findOne({ email }).then((user) => {
		if (!checkPassword(user.password)) {
			res.sendFile(pageName("invalidEmailOrPassword"));
		}
		res.sendFile(pageName("logged"));
	});
});

export default router;
