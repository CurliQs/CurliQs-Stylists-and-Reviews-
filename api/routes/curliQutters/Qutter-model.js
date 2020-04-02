const db = require("../../../database/dbConfig");

module.exports = {
    get,
    getById,
    getByEmail,
    create,
    update,
    remove
};
  
function get(){
    return db('curliQutter').select(
		"qutter_id",
		"username",
		"password",
		"email",
		"location",
		"specialty"
	);
};

function getById(qutter_id) {
    return db('curliQutter')
        .where({ qutter_id })
        .select('qutter_id', 'username', 'email', 'location','specialty')
        .first();
};

function getByEmail(email){
    return db('curliQutter')
        .where({ email })
        .select('qutter_id', 'username', 'email', 'location','specialty', 'password')
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

async function remove (qutter_id){
    await db('curliQutter')
        .where({ qutter_id })
        .delete()
        return get();
};
