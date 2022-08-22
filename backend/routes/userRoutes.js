import express from "express";
const router = express.Router();
import {authUser, getUserProile, registerUser } from '../controllers/userControllers.js'
import {protect} from "../middleware/authMiddleware.js"
// post ko lagi 

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect,getUserProile)



export default router;

