import { Model } from 'sequelize'

export const clientsModel = (sequelize: any, DataTypes: any) => {
  class clients extends Model {
    static associate(models: any) {
      // define association here
    }
  }
  clients.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cedula: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'clients',
    }
  )
  return clients
}
