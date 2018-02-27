// var fs        = require("fs");
var path      = require("path");
// var Sequelize = require("sequelize");
// var env       = process.env.NODE_ENV || "development";
// var config    = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
// var sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = function(sequelize){
  // var models = {};  
  // fs
  //   .readdirSync(__dirname)
  //   .filter(function(file) {
  //     return (file.indexOf(".") !== 0) && (file !== "index.js");
  //   })
  //   .forEach(function(file) {
  //     var model = sqlz.import(path.join(__dirname, file));
  //     models[model.name] = model;
  //   });

  // Object.keys(models).forEach(function(modelName) {
  //   if ("associate" in models[modelName]) {
  //     models[modelName].associate(models);
  //   }
  // });
  let models = {
    author: sequelize.import(path.resolve(__dirname, 'author.js')),
    category: sequelize.import(path.resolve(__dirname, 'category.js')),
    video: sequelize.import(path.resolve(__dirname, 'video.js')),
    tag: sequelize.import(path.resolve(__dirname, 'tag.js')),
    comment: sequelize.import(path.resolve(__dirname, 'comment.js')),
  };

  models.author.hasMany(models.video, {
    as: 'Videos'
  });
  models.category.hasMany(models.video, {
    as: 'Videos'
  });
  models.comment.belongsTo(models.video, {
    onDelete: 'cascade',
    foreignKey: {
        field: 'videoId',
        allowNull: false,
    }
  });
  models.video.belongsTo(models.author, {
    onDelete: 'cascade',
    foreignKey: {
        field: 'authorId',
        allowNull: false,
    }
  });
  models.video.belongsTo(models.category, {
    onDelete: 'cascade',
    foreignKey: {
        field: 'categoryId',
        allowNull: false,
    }
  });
  models.video.hasMany(models.comment, {
    as: 'Comments'
  });
  // Video has many comments (belongsToMany or manyToMany)
  models.video.belongsToMany(models.tag, {
    as: 'Tags',
    through: 'videoTags'
  });


  return models;  
};
