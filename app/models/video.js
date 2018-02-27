module.exports = function(sequelize, Sequelize){
    const Video = sequelize.define('video', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.TEXT
        },
        userId: {
          type: Sequelize.INTEGER
        }
      });
    return Video;
  }  