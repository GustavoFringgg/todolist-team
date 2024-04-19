const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            select: false,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            select: false,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("Todo", todoSchema);
