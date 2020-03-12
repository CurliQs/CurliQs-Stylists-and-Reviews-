const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Qutters = require("./Qutter-model");

router.post("/register", async (req, res) => {
	let qutter = req.body;
	const hash = bcrypt.hashSync(qutter.password, 12);
	qutter.password = hash;
	// console.log(curliQ);
	Qutters.create(qutter)
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

	Qutters.getByUsername({ username })
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
	Qutters.get()
		.then(customer => res.status(200).json(customer))
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
