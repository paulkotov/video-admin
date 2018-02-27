module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.TEXT
      });
  return author;
}  