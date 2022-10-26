const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const media = require('../models/Media');
const model = require('../models/Comment');


const requireComment = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "Their is no post that you comment in !!" });
    }
    try {
        const { media_id } = jwt.verify(authorization, process.env.SECRET_KEY);
        req.comment_data = media_id
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ err: "their is no such comment !!" });
    }
}


// http://localhost:2400/comment

router.get('/', async (req, res) => {
    try {
        const response = await model.find();
        res.status(200).json(response);
        console.log("comments is showed");
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// http://localhost:2400/comment/:id

router.get('/:media_id', requireComment, async (req, res) => {
    try {
        const id = req.params.media_id
        const response = await model.find({ 'media_id': id });
        res.status(200).json(response);
        console.log("user is showed by id");
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// https://localhost:2400/comment/comment_post

router.post('/comment_post/:media_id', requireComment, async (req, res) => {

    let media_id = req.params.media_id;
    media.findOne({ _id: media_id });
    try {
        if (media) {
            const new_data = new model({
                comments: req.body.comments,
                media_id: media_id
            });
            const response = await new_data.save();
            console.log("user commented" + response);
            res.status(200).json({ message: "Successfully post", response });
        }
    }
    catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

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
