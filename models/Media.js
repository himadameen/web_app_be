const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const MediaSchema = mongoose.Schema({

    postName: {
        type: String,
    },
    post: {
        type: String,
    },
    description: {
        type: String,
    },
})


MediaSchema.methods.generateAuthToken = async function () {
    try {
        let media = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        await this.save();
        return media;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = mongoose.model('Media', MediaSchema);
