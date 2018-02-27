module.exports = function(sequelize, Sequelize){
    const Tag = sequelize.define('tag', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.TEXT
        }
      });
    return Tag;
  }  