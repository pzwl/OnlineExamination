var jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config({path:'config.env'});


const fetchstd=  (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth_token');
    if(!token){
        res.status(401).send({error:"Please authencticate using a valid token"})
    }
    try {
        const data= jwt.verify(token,process.env.JWT_SECRET);
        req.std = data.std;
        next()
    } catch (error) {
        res.status(401).send({error:"Please authencticate using a valid token"})
    }
    
}
module.exports = fetchstd;