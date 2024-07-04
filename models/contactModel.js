const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
    }
}, {
    timestamps: true // This option should be here, not as a separate property
});

module.exports = mongoose.model("Contact", contactSchema);
