const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Qs = require("./Q-model");

router.post("/register", (req, res) => {
	let curliQ = req.body;
	const hash = bcrypt.hashSync(curliQ.password, 12);
	curliQ.password = hash;

	Qs.add(curliQ)
		.then(saved => {
			res.status(201).json({ saved });
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.post("/login", (req, res) => {
	let { username, password } = req.body;

	Qs.findBy({ username })
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
	
	Qs.find()
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
