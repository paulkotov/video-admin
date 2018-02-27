const Sequelize = require('sequelize');
const sqlz = require('../models/index'); 
const Video = require('../models/video');

exports.showVideo = function(req, res){

};

exports.showAllVideos = function (req, res){
    sqlz.findAll().then(videos => res.send(videos))
                .catch(e => console.log(e));
};

exports.addVideo = function (req, res){

};

exports.delVideo = function (req, res){
    sqlz.destroy({
        where: {
            
        }
    })
};