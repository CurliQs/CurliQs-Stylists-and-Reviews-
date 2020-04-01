const db = require("../../../database/dbConfig");

module.exports = {
	getRegimen,
	createRegimen,
	updateRegimen,
	removeRegimen
};

function getRegimen(curli_id) {
	return db("regimen")
		.where({ curli_id })
		.select("regimen_id", "step", "curli_id")
		.first();
}

async function createRegimen(regimen) {
	const [regimen_id] = await db("regimen").insert(regimen, "regimen_id");
	return getRegimen(regimen_id);
}

async function updateRegimen(regimen_id, updates) {
	await db("regimen")
		.where({ regimen_id })
		.update(updates);
	return getRegimen(regimen_id);
}

async function removeRegimen(regimen_id) {
	await db("regimen")
		.where({ regimen_id })
		.delete();
	return getRegimen(regimen_id);
}
