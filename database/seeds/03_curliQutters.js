exports.seed = function(knex) {
	return (
		knex("curliQutter")
			.del()
			// .truncate()
			.then(function() {
				// Inserts seed entries
				return knex("curliQutter").insert([
					{
						// qutter_id: 1,
						username: "Rommi",
						password: "testie123",
						email: "rommi@test.com",
						location: "",
						specialty: "2c"
					},
					{
						// qutter_id: 2,
						username: "Eboni",
						password: "testie123",
						email: "eboni@test.com",
						location: "",
						specialty: "4b"
					},
					{
						// qutter_id: 3,
						username: "Fanni",
						password: "testie123",
						email: "fanni@test.com",
						location: "",
						specialty: "4c"
					},
					{
						// qutter_id: 4,
						username: "Ralph",
						password: "testie123",
						email: "ralph@test.com",
						location: "",
						specialty: "3a"
					}
				]);
			})
	);
};
