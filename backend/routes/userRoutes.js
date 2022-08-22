import express from "express";
const router = express.Router();
import {authUser} from '../controllers/userControllers.js'

// post ko lagi 

router.post('/login', authUser)

export default router;

