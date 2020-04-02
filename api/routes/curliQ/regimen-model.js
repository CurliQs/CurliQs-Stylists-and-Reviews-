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
		.select("regimen_id", "step", "curli_id");
	// .first();
}

function getRegimenById(regimen_id) {
	return db("regimen")
		.where({ regimen_id })
		.select("regimen_id", "step", "curli_id");
}

async function createRegimen(regimen) {
	console.log(regimen);
	const [regimen_id] = await db("regimen").insert(regimen, "regimen_id");
	return getRegimenById(regimen_id);
}

async function updateRegimen(curli_id, updates) {
	await db("regimen")
		.where({ curli_id })
		.update(updates);
	return getRegimen(curli_id);
}

async function removeRegimen(curli_id) {
	await db("regimen")
		.where({ curli_id })
		.delete();
	return getRegimen(curli_id);
}
