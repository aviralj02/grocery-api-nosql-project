import Grocery from "../models/grocery.js";

export const fetchGrocery = async (req, res) => {
    try {
        const gid = req.params.id;

        const grocery = await Grocery.findOne({ gid: gid });

        if (!grocery){
            res.status(404).json({ message: "No grocery found!" });
        }

        res.json(grocery);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const fetchUserGroceries = async (req, res) => {
    try {
        const uname = req.params.slug;

        const groceries = await Grocery.find({ user: uname });

        res.json(groceries);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const createGrocery = async (req, res) => {
    try{
        const { gid, user, item, quantity, isPurchased } = req.body;

        const newGrocery = await Grocery.create({
            gid,
            user,
            item,
            quantity,
            isPurchased
        });

        res.status(201).json(newGrocery);
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateGrocery = async (req, res) => {
    try {
        const gid = req.params.id;
        const { item: newItem, quantity: newQuantity, isPurchased } = req.body;

        const updatedItem = await Grocery.findOneAndUpdate({ gid: gid }, {
            item: newItem,
            quantity: newQuantity,
            isPurchased: isPurchased
        }, { new: true });

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error"});
    }
};

export const deleteGrocery = async (req, res) => {
    try {
        const gid = req.params.id;

        const fetchedItem = await Grocery.findOneAndDelete({ gid: gid });

        if (!fetchedItem) {
            return res.status(404).json({ message: 'Not Found!' });
        }

        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
