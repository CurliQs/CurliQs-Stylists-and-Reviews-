const db = require("../../../database/dbConfig");

module.exports = {
	getReviews,
	getReviewById,
	// getByUsername,
	createReview,
	updateReview,
	removeReview
};

function getReviews() {
	return db("product_review").select(
		"review_id",
		"review",
		"rating",
		"curli_id",
		"qutter_id"
	);
}

function getReviewById(review_id) {
	return db("product_review")
		.where({ review_id })
		.select("review_id", "review", "rating", "curli_id", "qutter_id")
		.first();
}

// function getByUsername(username) {
// 	return db("curliQutter")
// 		.where({ username })
// 		.first();
// }

async function createReview(review) {
	const [review_id] = await db("product_review").insert(review, "review_id");
	return getReviewById(review_id);
}

async function updateReview(review_id, updates) {
	await db("product_review")
		.where({ review_id })
		.update(updates);
	return getReviewById(review_id);
}

async function removeReview(review_id) {
	await db("product_review")
		.where({ review_id })
		.delete()
	return getReviews()
}
