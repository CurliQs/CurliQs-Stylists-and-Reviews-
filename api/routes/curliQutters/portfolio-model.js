const db = require("../../../database/dbConfig");

module.exports = {
	getPortfolio,
	createPortfolio,
	updatePortfolio,
	removePortfolioItem
};

function getPortfolio(qutter_id) {
	return db("portfolio")
		.where({ qutter_id })
		.select("portfolio_id", "qutter_id", "hair_type", "products");
	// .first();
}

function getPortfolioById(portfolio_id) {
	return db("portfolio")
		.where({ portfolio_id })
		.select("portfolio_id", "qutter_id", "hair_type", "products");
}

async function createPortfolio(portfolio) {
	console.log(portfolio);
	const [portfolio_id] = await db("portfolio").insert(portfolio, "portfolio_id");
	return getPortfolioById(portfolio_id);
}


async function updatePortfolio(qutter_id, updates) {
	await db("portfolio")
		.where({ qutter_id })
		.update(updates);
	return getPortfolio(qutter_id);
}

async function removePortfolioItem(portfolio_id) {
	await db("portfolio")
		.where({ portfolio_id })
		.delete();
	return getPortfolio(qutter_id);
}
