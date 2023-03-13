import { Model } from 'sequelize'

export const invoicesModel = (sequelize: any, DataTypes: any) => {
  class invoices extends Model {
    static associate(models: any) {
      invoices.belongsTo(models.clients, {
        as: 'clients',
        foreignKey: 'idClient',
      })
      invoices.belongsTo(models.services, {
        as: 'services',
        foreignKey: 'idService',
      })
    }
  }
  invoices.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idClient: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idService: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'invoices',
    }
  )
  return invoices
}
