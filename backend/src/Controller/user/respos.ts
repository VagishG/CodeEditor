import axios from "axios";
import type { Request,Response } from "express";

const getRepos=async(req:Request,res:Response):Promise<void>=>{
    const user =req.user;
    console.log(user);
    if(!user){
        res.status(401).json({message:"Unauthorized Request"});
        return;
    }
    const access_token= user.access_token;
    try{    
        const response =await axios.get(`https://api.github.com/search/repositories?q=user:${user.login}`,      {headers: {
            'Authorization': `Bearer ${access_token}`
        }});
        res.status(200).json(response.data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }

}


export {getRepos};