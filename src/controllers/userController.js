const express = require('express');
const userService = require('../services/userService');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticateToken, async (req, res) =>{
    try{
        const users = await userService.getUsers();
        res.json(users);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.post('/', async(req,res) =>{
    const { username, password, email } = req.body;
    const user = await userService.register(username, password, email);
    res.status(201).json(user);
})

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const token = await userService.login(username, password);
    res.json({token: token});
})

module.exports = router;