const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        name:{ type: DataTypes.STRING, allowNull: false },
        difficulty:{ type: DataTypes.INTEGER, validate:{ min: 1, max: 5}, allowNull: false},
        duration:{ type: DataTypes.STRING, allowNull: false },
        //season:{type:DataTypes.ENUM({ values:['summer', 'autumn', 'winter', 'spring'] }) },
        season: { type: DataTypes.ARRAY(DataTypes.ENUM({ values: ['summer', 'autumn', 'winter', 'spring']})), allowNull: false },
    },{
        timetamps: false,
        freezeTableName:true 
      })
}
