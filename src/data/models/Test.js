import DataType from 'sequelize';
import Model from '../sequelize';

const Test = Model.define('test', {
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

});

export default Test;