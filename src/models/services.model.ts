import { Model } from 'sequelize'

export const servicesModel = (sequelize: any, DataTypes: any) => {
  class services extends Model {
    static associate(models: any) {
      // define association here
    }
  }
  services.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
    },
    {
      sequelize,
      modelName: 'services',
    }
  )
  return services
}
