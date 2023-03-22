import express from "express";
import { create,getAll,remove,update,get } from "../controllers/product";
const router = express.Router();
router.post("/products", create)
router.get("/products", getAll)
router.get("/products/:id", get)
router.put("/products/:id", update)
router.delete("/products",remove)
export default router;