exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("portfolio")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("portfolio").insert([
				{
					// portfolio_id: 1,
					qutter_id: 1,
					hair_type: "2c",
					products: "lotion, oil, cream"
				},
				{
					// portfolio_id: 2,
					qutter_id: 2,
					hair_type: "3b",
					products: "lotion, oil, cream"
				},
				{
					// portfolio_id: 3,
					qutter_id: 3,
					hair_type: "4c",
					products: "lotion, oil, cream"
				},
				{
					// portfolio_id: 4,
					qutter_id: 4,
					hair_type: "2a",
					products: "lotion, oil, cream"
				}
			]);
		});
};
