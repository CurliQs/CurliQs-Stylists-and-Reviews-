const Curlis = require("../routes/curliQ/Q-model");

module.exports = (req, res, next) => {
	const {email} = req.body

	Curlis.getByEmail(email)
		.then(curli => {
			if (!curli) {
				res
					.status(404)
					.json({ error: "Invalid curli ID: Curli not found." });
			} else {
				next();
			}
		})
		.catch(() =>
			res
				.status(500)
				.json({ error: "There was an error finding the customer." })
		);
};
