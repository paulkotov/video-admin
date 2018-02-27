module.exports = function(sequelize, Sequelize){
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      validate: {
          isEmail: true
      }
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
  });
 return User;
}

// sqlz.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });