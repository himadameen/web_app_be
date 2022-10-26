const mongoose = require("mongoose");
// const jwt = require('jsonwebtoken');

const CommentSchema = mongoose.Schema({

    comments: {
        type: String,
    },
    media_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    }

})

module.exports = mongoose.model('Comment', CommentSchema);
