
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
    .references('Items.Curli_id_in_curliQ')
      //not sure about the items and difference between sql fk\/ and pg fk/\
    t.integer('curli_id')
    .unsigned()
    .notNullable()
    .references('curli_id')
    .inTable('curliQ')
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
      .references('Items.qutter_id_in_curliQutters')
        //not sure about the items and difference between sql fk\/ and pg fk/\
      t.integer('qutter_id')
      .unsigned()
      .notNullable()
      .references('qutter_id')
      .inTable('curliQutters')
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
      .references('Items.Curli_id_in_curliQ')
        //not sure about the items and difference between sql fk\/ and pg fk/\
      t.integer('curli_id')
      .unsigned()
      .notNullable()
      .references('curli_id')
      .inTable('curliQ')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      t.string('step', 1256)

      t.foreign('qutter_id')
      .references('Items.qutter_id_in_curliQutters')
        //not sure about the items and difference between sql fk\/ and pg fk/\
      t.integer('qutter_id')
      .unsigned()
      .notNullable()
      .references('qutter_id')
      .inTable('curliQutters')
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
