const {register,login}=require('../controllers/user-controller');

const express = require('express');
const router = express.Router();
const app=express();

app.use(express.json());

// Route for user registration

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;