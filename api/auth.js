const router = require('express').Router();
// Need curli helper in here
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function generateToken(curli) {
    const payload = {
        username: curli.username,
        id: user.id,
    };
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, process.env.JWT_SECRET || 'asdflasdfl', options);
}
router.post('/register', (req, res) => {
    const { username, password, email, } = req.body;
    User.addUser({username, password: bcrypt.hashSync(password, 8), email })
        .then(id => {
            res.status(201).json({ Message: 'User Registeration Succesful', id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ Message: 'Error Registering User'});
        });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('outside', req.body)
    Curli.getByUsername(username)
        .then(user => {
            console.log('inside', username)
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ Message: "Login Succesful!", token });
            } else {
                res.status(401).json({ Message: 'Error logging in' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ Message: 'Error logging in' })
        })
})

module.exports = router;