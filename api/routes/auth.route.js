import express from 'express';
import {google, signin, signOut, signup } from '../controllers/auth.controller.js';

// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 

const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google',google);
router.get('/signout',signOut);

export default router;