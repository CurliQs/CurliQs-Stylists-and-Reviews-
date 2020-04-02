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
    return db('curliQ').select(
		"curli_id",
		"username",
		"password",
		"email",
		"location",
		"hair_type"
	);;
};

function getById(curli_id) {
    return db('curliQ')
        .where({ curli_id })
        .select('curli_id', 'username', 'email', 'location','hair_type')
        .first();
};

function getByEmail(email){
    return db('curliQ')
        .where({ email })
        .select('curli_id', 'username', 'email', 'location','hair_type','password')
        .first();
};

async function create(user ){
    const [curli_id] = await db('curliQ').insert(user, 'curli_id');
    return getById(curli_id);
};

async function update(curli_id, updates){
    await db('curliQ')
        .where({ curli_id })
        .update(updates);
    return getById(curli_id);
};

async function remove (curli_id){
    await db('curliQ')
        .where({ curli_id })
        .delete()
        return get();
};

