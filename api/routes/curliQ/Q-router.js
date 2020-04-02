const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticate = require("../../authenticate-middleware")

const {
	verifyCurli,
	verifyCurliRegister
// 	// verifyReview,
// 	// verifyLogin,
// 	// verifyReviewData,
// 	// verifyCustomerUsername
} = require('../../middleware');

const Qs = require("./Q-model");
const Regimen = require("./regimen-model");

router.post("/register", verifyCurliRegister, async (req, res) => {
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

router.post("/login", verifyCurli, (req, res) => {
	let { email, password } = req.body;

	Qs.getByEmail(email)
		.first()
		.then(user => {
			console.log(user)
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
	Qs.get()
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.get("/:id", authenticate, (req, res) => {
	let { id } = req.params;
console.log('helo', authenticate)
	Qs.getById(id)
		.then(customer => res.status(200).json(customer))
		.catch(err => 
			{console.log("heythere",err)
			res.status(500).json(err)});
});

router.put("/:id", authenticate, (req, res) => {
	let { id } = req.params;
	let update = req.body;
	Qs.update(id, update)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id", authenticate, (req, res) => {
	let { id } = req.params;
	Qs.remove(id)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});

router.get("/:id/regimen", authenticate, (req, res) => {
	let { id } = req.params;
	Regimen.getRegimen(id)
		.then(regimen => res.status(200).json(regimen))
		.catch(err => res.status(500).json(err));
});

router.post("/:curli_id/regimen", authenticate, (req, res) => {
	let { curli_id } = req.params;
	let regimen = req.body;
	let data = { ...regimen, curli_id };
	Regimen.createRegimen(data)
		.then(regimen => res.status(201).json(regimen))
		.catch(err => res.status(500).json(err));
});

router.put("/:id/regimen", authenticate, (req, res) => {
	let { id } = req.params;
	let updates = req.body;
	Regimen.updateRegimen(id, updates)
		.then(regimen => res.status(201).json(regimen))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id/regimen", authenticate, (req, res) => {
	let { id } = req.params;
	Regimen.removeRegimen(id)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(500).json(err));
});

const signToken = curliq => {
	const payload = {
		username: curliq.username
	};

	const secret = process.env.JWT_SECRET || "FLCL is not rewatchable. Fight me.";

	const options = {
		expiresIn: "7d"
	};

	return jwt.sign(payload, secret, options);
};

module.exports = router;
