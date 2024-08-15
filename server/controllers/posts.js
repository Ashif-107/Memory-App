import mongoose from "mongoose";
import postmsg from "../models/postmsg.js";

export const getPosts = async (req,res) => {
    try{

        const postmsgs = await postmsg.find();

        console.log(postmsgs);

        res.status(200).json(postmsgs)
    }catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req,res) =>{
    const post = req.body;

    const newPost = new postmsg(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);

    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');

    const updatedPost = await postmsg.findByIdAndUpdate(_id, {...post, _id}, {new: true}) 

    res.json(updatedPost)
}

export const deletePost = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');
    
    await postmsg.findByIdAndDelete(id);

    res.json({message: 'post deleted'})
}