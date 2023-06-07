import { Router } from "express";
import pageName from "../utils/getPage.js";

const router = Router();
router.get("/", (req, res) => res.sendFile(pageName("login")));
router.post("/", (req, res) => {
	console.log(req.body);
});

export default router;
