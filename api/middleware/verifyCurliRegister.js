module.exports = (req, res, next) => {
	const register = req.body;

	if (
		!register.username ||
		!register.password ||
		!register.location ||
		!register.email ||
		!register.hair_type
	) {
		res.status(400).json({
			error:
				"Customer registration requires username, password, location, hair type and email. Verify all are filled"
		});
	} else {
		next();
	}
};