const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING
    },
		difficulty: {
			type: DataTypes.STRING(1)
		},
		duration: {
			type: DataTypes.STRING
		},
		season: {
			type: DataTypes.ENUM(["SUMMER", "FALL", "WINTER", "SPRING"])
		}
  });
};
