exports.seed = function(knex) {
	// Deletes ALL existing entries
	return (
		knex("regimen")
			.del()
			// .truncate()
			.then(function() {
				// Inserts seed entries
				return knex("regimen").insert([
					{
						// regimen_id: 1,
						curli_id: 1,
						step: "1. lotion"
					},
					{
						// regimen_id: 4,
						curli_id: 2,
						step: "1. lotion"
					},
					{
						// regimen_id: 7,
						curli_id: 3,
						step: "1. lotion"
					},
					{
						// regimen_id: 10,
						curli_id: 4,
						step: "1. lotion"
					}
				]);
			})
	);
};
