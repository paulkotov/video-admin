module.exports = function(sequelize, Sequelize){
    const Comment = sequelize.define('comment', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.TEXT
        },
        userId: {
          type: Sequelize.INTEGER
        }
      });
    return Comment;
  }  