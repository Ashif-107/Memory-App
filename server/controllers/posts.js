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