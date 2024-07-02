import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup=async (req,res)=>{
    const {username,email,password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser =new User({username,email,password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
      } catch (error) {
        res.status(500).json(error.message);
      }
};
// The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked.
// The await keyword is used to wait for a promise to resolve. It can only be used within an async block.