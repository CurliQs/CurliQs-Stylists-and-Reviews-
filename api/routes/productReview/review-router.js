const router = require("express").Router();
const authenticate = require("../../authenticate-middleware")

const Reviews = require("./review-model");

router.get("/", (req, res) => {
	Reviews.getReviews()
		.then(customer => res.status(200).json(customer))
		.catch(err => res.status(500).json(err));
});

router.post("/", authenticate,(req, res) => {
	let review = req.body;
	Reviews.createReview(review)
		.then(review => {
			res.status(201).json(review);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/:id", authenticate, (req, res) => {
	let { id } = req.params;

	Reviews.getReviewById(id)
		.then(review => res.status(200).json(review))
		.catch(err => res.status(500).json(err));
});

router.put("/:id", authenticate, (req, res) => {
	let { id } = req.params;
	let update  = req.body;
	Reviews.updateReview(id, update)
		.then(review => res.status(201).json(review))
		.catch(err => res.status(500).json(err));
});

router.delete("/:id", authenticate,(req, res)=>{
   let {id} = req.params;
   Reviews.removeReview(id) 
   .then(review=>res.status(200).json(review))
   .catch(err => res.status(500).json(err));
})


module.exports = router;
