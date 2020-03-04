exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("curliQ")
		.del()
		// .truncate()
		.then(function() {
			// Inserts seed entries
			return knex("curliQ").insert([
				{
					curli_id: 1,
					username: "Tommi",
					password: "testie123",
					email: "tommi@test.com",
					location: "",
					hair_type: "2c"
        },
        {
					curli_id: 2,
					username: "Toni",
					password: "testie123",
					email: "toni@test.com",
					location: "",
					hair_type: "4b"
        },
        {
					curli_id: 3,
					username: "Taffi",
					password: "testie123",
					email: "taffi@test.com",
					location: "",
					hair_type: "4c"
        },
        {
					curli_id: 4,
					username: "Talbot",
					password: "testie123",
					email: "talbot@test.com",
					location: "",
					hair_type: "3a"
				}
				
			]);
		});
};
