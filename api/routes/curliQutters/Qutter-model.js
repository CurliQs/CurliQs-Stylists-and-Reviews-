const db = require("../../../database/dbConfig");

module.exports = {
    get,
    getById,
    getByUsername,
    create,
    update,
    remove
};
  
function get(){
    return db('curliQutter').select(
		"curli_id",
		"username",
		"password",
		"email",
		"location",
		"specialty"
	);;
};

function getById(qutter_id) {
    return db('curliQutter')
        .where({ qutter_id })
        .select('qutter_id', 'username', 'email', 'location','specialty')
        .first();
};

function getByUsername(username){
    return db('curliQutter')
        .where({ username })
        .first();
};

async function create(user){
    const [qutter_id] = await db('curliQutter').insert(user, 'qutter_id');
    return getById(qutter_id);
};

async function update(qutter_id, updates){
    await db('curliQutter')
        .where({ qutter_id })
        .update(updates);
    return getById(qutter_id);
};

function remove (qutter_id){
    return db('curliQutter')
        .where({ qutter_id })
        .delete()
        .returning('qutter_id');
};
