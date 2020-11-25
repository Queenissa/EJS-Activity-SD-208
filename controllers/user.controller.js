const mongoose = require('express')
const User = require('../models/user.model')
const { request, response } = require('express')



const userLoginPage = async(request, response) => {
    response.render('login')
}


const userRegisterPage = async (request, response) => {
    response.render('register')
}


const userRegister = async (request, response) => {
    try{
        
        const user = {
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email,
            address: request.body.address,
            password: request.body.password

        };

        const newUser  = new User(user);
        const result = await newUser.save();
        console.log(user)
        response.render('login', {user: user})


    }  catch (e){
        return response.status(400).json({
            error: e
        })
    }
  
}



const userLogin = async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;
        console.log(request.body)
        await User.findOne({password:password}, (err, foundResults) => {
            if (err) {
                console.log(err)
            } else{
                if (foundResults.password === password){
                    response.render('userProfile', {foundResults:foundResults} )
                } else {
                    response.redirect('/login')
                }
            }
        })
        
        
    } catch (e) {
        return response.status(400)
    }

}







module.exports = {
    userLoginPage,
    userRegisterPage,
    userRegister,
    userLogin
}