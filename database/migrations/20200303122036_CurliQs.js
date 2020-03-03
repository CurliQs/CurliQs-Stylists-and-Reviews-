
exports.up = function(knex) {
  return knex.schema
  .createTable('curliQ', t => {
      t.increment('curli_id')
      //blob in knex
      t.string('username', 255)
        .notNullable()
        .unique()
      t.string('password', 126)
        .notNullable()
      t.string('email', 256)
        .notNullable()
      t.string('location', 612)
      t.string('hair_type', 126)
  })
  .createTable('regimen', t => {
    t.increment('regimen_id')
    
    t.foreign('curli_id')
        .references('curli_id_in_curliQ')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    t.string('step', 1256)
  })
  .createTable('curliQutters', t => {
    t.increment('qutter_id')
    t.string('username', 255)
    .notNullable()
    .unique()
  t.string('password', 126)
    .notNullable()
  t.string('email', 256)
    .notNullable()
  t.string('location', 612)
  t.string('specialty', 1256)
  })
  .createTable('portfolio', t => {
      t.increment('portfolio_id')
      t.foreign('qutter_id')
         .references('qutter_id_in_curliQutters')
         .onDelete('CASCADE')
        .onUpdate('CASCADE')
      //json for image url
      t.string('hair_type', 126)
      t.string('products', 1256)
  })
  .createTable('product_review', t=> {
      t.integer(review_id)
      t.string('review', 1256)
      t.string('rating', 126)
      t.foreign('curli_id')
        .references('curli_id_in_curliQ')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      t.foreign('qutter_id')
         .references('qutter_id_in_curliQutters')
         .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('product_review')
    .dropTableIfExists('portfolio')
    .dropTableIfExists('curliQutters')
    .dropTableIfExists('regimen')
    .dropTableIfExists('curliQ');
};
