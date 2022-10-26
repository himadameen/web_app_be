const express = require('express');
const router = express.Router();
const model = require('../models/Auth');
const bcrypt = require('bcryptjs');

// http://localhost:2400/user

router.get('/', async (req, res) => {
    try {
        const response = await model.find();
        res.status(200).json(response);
        console.log("user is showed");
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// http://localhost:2400/user/:fullName

router.get('/:fullName', async (req, res) => {
    try {
        const temp = req.params.fullName;
        const response = await model.findOne({ 'fullName': temp });
        res.status(200).json(response);
        console.log(response);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

// http://localhost:2400/user/create

router.post('/create', async (req, res) => {
    try {
        const new_data = new model({
            fullName: req.body.fullName,
            email: req.body.email,
        });
        const response = await new_data.save();
        console.log("user is entered" + response);
        res.status(200).json({ message: "Successfully login", response, status: true, fullName: req.body.fullName });
    }
    catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

// http://localhost:2400/user/login

router.post('/login', async (req, res) => {
    try {
        const { fullName, email } = req.body;
        const user_data = await model.findOne({ fullName });

        if (user_data) {
            const match = await bcrypt.compare(email, user_data.email);
            const token = await user_data.generateAuthToken();

            // 2nd method ::

            // const token = await jwt.sign({userId:user_data._id}, JWT_SECRET);
            // res.status(201).json(token);
            // console.log("user_data" , user_data);

            if (!match) {
                return res.status(404).json({ error: "Invalid data !!" });
            } else {
                res.status(201).json({ message: "Successfully Login", token, fullName: user_data.fullName })
            }
        } else {
            return res.status(401).json({ error: "Invalid Credentials !!" });
        }

    }
    catch (err) {
        res.status(400).json(err);
    }
})

// http://localhost:2400/user/:fullName

router.delete('/:fullName', async (req, res) => {
    try {
        const temp = req.params.fullName;
        const response = await model.deleteOne({ 'fullName': temp });
        res.status(200).json(response);
        console.log("deleted");
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
