import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelController.js";
import { requireAuth } from '@clerk/express';

const hotelRouter = express.Router();

hotelRouter.post('/', protect, registerHotel);
router.post('/', requireAuth(), hotelController); // add afterr

export default hotelRouter;