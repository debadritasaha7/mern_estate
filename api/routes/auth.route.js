import express from 'express';
import { signup } from '../controllers/auth.controller.js';

// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 

const router=express.Router();

router.post("/signup",signup);

export default router;