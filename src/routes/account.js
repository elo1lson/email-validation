import { Router } from "express";
import pageName from "../utils/getPage.js";
import makeEmail from "../utils/makeEmailPage.js";
import validator from "email-validator";
import crypto from "crypto-js";
import { transporter } from "../config/nodemailer.js";
import tempUser from "../models/TempUser.js";
import User from "../models/User.js";

const router = Router();

router.get("/create", async (_, res) =>
	res.sendFile(pageName("createAccount")),
);

router.post("/create", async (req, res) => {
	if (!validator.validate(req.body.email)) return;

	const { email, nome, sobrenome } = req.body;
	const code = Math.floor(Math.random() * 10000)
		.toString()
		.padStart(4, "0");

	const tempUserExists = await tempUser.findOne({ email });
	if (tempUserExists) {
		return res.sendFile(pageName("userExists"));
	}
	const newTempUser = new tempUser({
		email,
		name: nome,
		lastName: sobrenome,
		code,
	});

	newTempUser
		.save()
		.then((user) => console.log(user))
		.catch((e) => {
			console.log(e);
		});

	const url = "http://192.168.1.61:3000/account/validate/" + newTempUser._id;
	let mailOptions = {
		from: "eloilson2@outlook.com",
		to: req.body.email,
		subject: "Seu codigo de verificação",
		html: makeEmail({ code, name: req.body.nome, url }),
	};

	transporter.sendMail(mailOptions, (error, _) => {
		if (error) {
			console.log("Erro ao enviar o e-mail:", error);
		} else {
			res.sendFile(pageName("sendedMail"));
		}
	});
});

router.get("/validate/:id", async (req, res) => {
	const id = req.params.id;
	const validateUser = await tempUser
		.findOne({ _id: id })
		.then((u) => u)
		.catch((e) => {
			console.log(e, "erro");
			return res.sendFile(pageName("validationNotFound"));
		});
	if (validateUser) res.sendFile(pageName("validateCode"));
});

router.post("/validate/:id", async (req, res) => {
	const validate = async () => {
		const password = req.body.password;

		tempUser.findOne({ _id: id }).then(async (doc) => {
			const { email, name, lastName } = doc;
			const passwordHash = crypto
				.SHA256(password + process.env.SALT)
				.toString();

			User.create({ email, name, lastName, password: passwordHash }).then(
				(u) => {
					u.save();
					tempUser.findOneAndDelete({ _id: id }).then((d) => d);
				},
			);
		});
	};

	const id = req.params.id;
	const validateUser = await tempUser.findOne({ _id: id });
	const verificationCode = req.body.verificationCode;

	if (!validateUser) return res.sendFile(pageName("validationNotFound"));

	if (validateUser.code == verificationCode) {
		validate();
		return res.sendFile(pageName("validatedCode"));
	}

	return res.sendFile(pageName("invalidCode"));
});

export default router;
