const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Qutter = require("./Qutter-model");

router.post("/register", (req, res) => {
	const body = req.body;
	const hash = bcrypt.hashSync(body.password, 12);
	body.password = hash;
	Qutter.addQutter(body)
		.then(nq => {
			res.status(201).json(nq);
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: "Error creating profile please add required data" });
		});
});

router.get("/", (req, res) => {
	Qutter.getQutters()
		.then(qutter => {
			res.status(200).json(qutter);
		})
		.catch(err => {
			res.status(500).json({ message: `An Error has occured see ${err}` });
		});
});

router.get("/:id", (req, res) => {
	const id = req.params.id;
	Qutter.getQuttersId(id)
		.then(qutter => {
			res.status(200).json(id);
		})
		.catch(err => {
			res.status(500).json({ message: `An Error has occured see ${err}` });
		});
});

module.exports = router;
