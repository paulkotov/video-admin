const Sequelize = require('sequelize');
const sqlz = require('../models/index'); 
const User = require('../models/user');

exports.showUser = function(name, res){
    console.log(name);
    // sqlz.findOne({
    //     where : {username: username}
    // }).then(user => res.send(user))
    //     .catch(e => console.log(e)); 
    res.send({username: 'Paul Kotov'});
}

exports.showAllUsers = function(req,res){
    sqlz.findAll().then(users => res.send(users))
                .catch(e => console.log(e));
	 
}

exports.addUser = function(req, res){
    const { data } = req.body;
    sqlz.sync().then(()=>{
        User.create({
            username: data.username,
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname
        })
    }).catch((e)=> console.log(e))
	res.render('dashboard'); 

}