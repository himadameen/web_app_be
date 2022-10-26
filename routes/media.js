const express = require('express');
const router = express.Router();
const model = require('../models/Media');


// http://localhost:2400/media

router.get('/', async (req, res) => {
    try {
        const response = await model.find();
        res.status(200).json(response);
        console.log("media is showed");
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// http://localhost:2400/media/:id

router.get('/:_id', async (req, res) => {
    try {
        const temp = req.params._id;
        const response = await model.findOne({ '_id': temp });
        res.status(200).json(response);
        console.log(response);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

// https://localhost:2400/media/create

router.post('/create', async (req, res) => {
    try {
        const new_data = new model({
            postName: req.body.postName,
            post: req.body.post,
            description: req.body.description,
        });
        const response = await new_data.save();
        console.log("user is posted" + response);
        const token = await response.generateAuthToken();
        res.status(200).json({ message: "Successfully post", token, response });

    }
    catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

// http://localhost:4200/media/:id

router.delete('/:id', async (req, res) => {
    try {
        const temp = req.params.id;
        const response = await model.deleteOne({ '_id': temp });
        res.status(200).json(response);
        console.log("deleted");
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
