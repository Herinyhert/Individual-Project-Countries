const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        name:{ type: DataTypes.STRING, allowNull: false },
        difficulty:{ type: DataTypes.INTEGER, validate:{ min: 1, max: 5}, allowNull: false},
        duration:{ type: DataTypes.STRING, allowNull: false },
        season:{ type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring')},
    },{
        timetamps: false,
        freezeTableName:true 
      })
}
