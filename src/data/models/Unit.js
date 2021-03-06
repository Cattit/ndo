import DataType from 'sequelize';
import Model from '../sequelize';

const Unit = Model.define('unit', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  title: {
    type: DataType.STRING(255),
  },

  body: {
    type: DataType.STRING,
  },

  schema: {
    type: DataType.STRING,
  },
});

export default Unit;
