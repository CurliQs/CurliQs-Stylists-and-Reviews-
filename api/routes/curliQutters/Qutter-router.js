const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../../authenticate-middleware");

const Qutters = require("./Qutter-model");
const Portfolio = require("./portfolio-model");

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

router.get("/", authenticate, (req, res) => {
	Qutters.get()
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.get("/:id", authenticate, (req, res) => {
	let { id } = req.params;

	Qutters.getById(id)
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.put("/:id", authenticate, (req, res) => {
	let { id } = req.params;
	let update = req.body;
	Qutters.update(id, update)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id", authenticate, (req, res) => {
	let { id } = req.params;
	Qutters.remove(id)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});

router.get("/:id/portfolio", authenticate, (req, res) => {
	let { id } = req.params;
	Portfolio.getPortfolio(id)
		.then(portfolio => res.status(200).json(portfolio))
		.catch(err => res.status(500).json(err));
});

router.post("/:qutter_id/portfolio", authenticate, (req, res) => {
	let { qutter_id } = req.params;
	let portfolio = req.body;
	let data = { ...portfolio, qutter_id };
	Portfolio.createPortfolio(data)
		.then(portfolio => res.status(201).json(portfolio))
		.catch(err => res.status(500).json(err));
});

router.put("/:id/portfolio", authenticate, (req, res) => {
	let { id } = req.params;
	let updates = req.body;
	Portfolio.updatePortfolio(id, updates)
		.then(portfolio => res.status(201).json(portfolio))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id/portfolio/:portfolio_id", authenticate, (req, res) => {
	let { portfolio_id } = req.params;
	Portfolio.removePortfolioItem(portfolio_id)
		.then(portfolioPiece => res.status(201).json(portfolioPiece))
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
