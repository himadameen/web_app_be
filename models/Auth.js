const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const NewUserSchema = mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})



// hashing the passwords : [bcrypt JS]

NewUserSchema.pre('save', async function (next) {
    if (this.isModified('email')) {
        this.email = await bcrypt.hash(this.email, 12);
    }
    next();
});

// generating token ::

NewUserSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = mongoose.model('NewUser', NewUserSchema);