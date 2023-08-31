const { DataTypes: dt } = require("sequelize");
const db = require("./db.config");


const User = db.define(
  "User",
  {
    idUser: {
      type: dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dt.STRING,
      allowNull: false,
    },
    lastName: {
      type: dt.STRING,
      allowNull: false,
    },
    email: {
      type: dt.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  { timestamps: true }
);

//RELACIÓN – BELONGS TO MANY
User.associate = (models) => {
    User.belongsToMany(models.Bootcamp, { through: "UsersBootcamp" });
  };

//SYNC
async function syncUsers() {
  try {
    await db.sync();
    console.log('Conexión establecida exitosamente a "Users"');
  } catch (error) {
    console.log('Imposible contectar a la base de datos "Users"', error);
  }
}
syncUsers();

//EXPORT
module.exports = { User };