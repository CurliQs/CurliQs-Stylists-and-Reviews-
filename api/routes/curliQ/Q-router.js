const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Qs = require("./Q-model");

router.post("/register", async (req, res) => {
	let curliQ = req.body;
	const hash = bcrypt.hashSync(curliQ.password, 12);
	curliQ.password = hash;
	// console.log(curliQ);
	Qs.create(curliQ)
		.then(saved => {
			// console.log({ saved });
			res.status(201).json({ saved });
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.post("/login", (req, res) => {
	let { username, password } = req.body;

	Qs.getByUsername({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = signToken(user);

				res.status(200).json({
					token,
					user: user,
					message: `Welcome ${user.username}!`
				});
			} else {
				res.status(401).json({ message: "Invalid Credentials" });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.get("/", (req, res) => {
	Qs.get()
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
	let { id } = req.params;

	Qs.getById(id)
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
	let { id } = req.params;
	let update = req.body;
	Qs.update(id, update)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
	let { id } = req.params;
	Qs.remove(id)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});


const signToken = user => {
	const payload = {
		username: user.username
	};

	const secret = process.env.JWT_SECRET || "FLCL is not rewatchable. Fight me.";

	const options = {
		expiresIn: "7d"
	};

	return jwt.sign(payload, secret, options);
};

module.exports = router;
