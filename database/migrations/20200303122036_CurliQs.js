exports.up = function(knex) {
	return knex.schema
		.createTable("curliQ", t => {
			t.increments("curli_id", 1);
			//blob in knex
			t.string("username", 255)
				.notNullable()
				.unique();
			t.string("password", 126).notNullable();
			t.string("email", 256)
				.notNullable()
				.unique();
			t.string("location", 612);
			t.string("hair_type", 126);
		})

		.createTable("regimen", t => {
			t.increments("regimen_id", 1);

			t.integer("curli_id").unsigned();

			t.foreign("curli_id")
				.references("curli_id")
				.inTable("curliQ")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			t.string("step", 1256);
		})

		.createTable("curliQutter", t => {
			t.increments("qutter_id", 1);
			t.string("username", 255)
				.notNullable()
				.unique();
			t.string("password", 126).notNullable();
			t.string("email", 256)
				.notNullable()
				.unique();
			t.string("location", 612);
			t.string("specialty", 1256);
		})

		.createTable("portfolio", t => {
			t.increments("portfolio_id", 1);
			t.integer("qutter_id").unsigned();
			t.foreign("qutter_id")
				.references("qutter_id")
				.inTable("curliQutter")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			//json for image url
			t.string("hair_type", 126);
			t.string("products", 1256);
		})

		.createTable("product_review", t => {
			t.increments("review_id", 1);
			t.string("review", 1256);
			t.string("rating", 126);

			t.integer("curli_id").unsigned();
			t.foreign("curli_id")
				.references("curli_id")
				.inTable("curliQ")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			t.integer("qutter_id").unsigned();
			t.foreign("qutter_id")
				.references("qutter_id")
				.inTable("curliQutter")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("product_review")
		.dropTableIfExists("portfolio")
		.dropTableIfExists("curliQutter")
		.dropTableIfExists("regimen")
		.dropTableIfExists("curliQ");
};
