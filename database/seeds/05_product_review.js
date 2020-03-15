exports.seed = function(knex) {
	// Deletes ALL existing entries
	return (
		knex("product_review")
			.del()
			// .truncate()
			.then(function() {
				// Inserts seed entries
				return knex("product_review").insert([
					{ 
						review_id: 1, review: "Curl cream", rating: "2", curli_id: 1 },
					{
						review_id: 2,
						review: "This is just ok ",
						rating: "2",
						qutter_id: 2
					},
					{
						review_id: 3,
						review: "Curl cream Not my bag",
						rating: "2",
						curli_id: 3
					},
					{
						review_id: 4,
						review: "I absolutely love this stuff",
						rating: "2",
						qutter_id: 4
					}
				]);
			})
	);
};
