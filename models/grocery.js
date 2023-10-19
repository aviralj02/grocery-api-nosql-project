import mongoose from "mongoose";

const GrocerySchema = new mongoose.Schema({
    gid: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    isPurchased: {
        type: Boolean,
        required: true
    }
});

const Grocery = mongoose.model("Grocery", GrocerySchema);

export default Grocery;