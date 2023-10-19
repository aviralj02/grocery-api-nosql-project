import express from 'express';
import { createGrocery, deleteGrocery, fetchGrocery, fetchUserGroceries, updateGrocery } from '../controllers/grocery.js';

const router = express.Router();

router.get("/grocery/:id", fetchGrocery);

router.get("/groceries/:slug", fetchUserGroceries);
router.post("/create", createGrocery);
router.put("/update/:id", updateGrocery);
router.delete("/delete/:id", deleteGrocery);

export default router;