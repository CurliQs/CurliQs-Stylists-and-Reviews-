const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Reviews = require("./review-model");

router.get("/", (req, res) => {
	Reviews.getReviews()
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
	let review = req.body;
	Reviews.createReview(review)
		.then(review => {
			res.status(201).json(review);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	let { id } = req.params;

	Reviews.getReviewById(id)
		.then(review => res.status(200).json(review))
		.catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
	let { id } = req.params;
	let update  = req.body;
	Reviews.updateReview(id, update)
		.then(review => res.status(201).json(review))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id",(req, res)=>{
   let {id} = req.params;
   Reviews.removeReview(id) 
   .then(review=>res.status(200).json(review))
   .catch(err => res.status(500).json(err));
})

// const signToken = user => {
// 	const payload = {
// 		username: user.username
// 	};

// 	const secret = process.env.JWT_SECRET || "FLCL is not rewatchable. Fight me.";

// 	const options = {
// 		expiresIn: "7d"
// 	};

// 	return jwt.sign(payload, secret, options);
// };

module.exports = router;
