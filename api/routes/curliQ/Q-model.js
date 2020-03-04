const db = require("../../../database/dbConfig");

module.exports = {
    add,
    find,
    findBy,
    findById
	
};

function find() {
	return db("curliQ").select(
		"curli_id",
		"username",
		"password",
		"email",
		"location",
		"hair_type"
	);
}

function findBy(filter){
    return db("curliQ").where(filter)
}

function findById(curli_id) {
	return db("curliQ")
		.where({ curli_id })
		.first();
}

async function add(user) {
    const [curli_id] = await db("curliQ").insert(user);
    
    return findById(curli_id)
}
