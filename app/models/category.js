module.exports = function(sequelize, Sequelize){
  const Category = sequelize.define('category', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      }
    });
  return Category;
}  