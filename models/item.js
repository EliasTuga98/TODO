const { DataTypes, Model } = require('sequelize');

class item extends Model {
  static init(connection) {
    super.init({
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Esta tarefa já existe',
        },
      },

      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize: connection,
      tableName: 'item',
    });
  }
}

module.exports = item;
