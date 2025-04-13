// server/routes/customer.routes.js
import express from "express";
import { submitCustomer } from "../controllers/customer.controller.js";

const router = express.Router();

router.post("/submit", submitCustomer); // ✅ POST /api/customers/submit

export default router;
