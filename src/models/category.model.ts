import { model, Schema, Document, connection } from 'mongoose';
import { Category } from '@/interfaces/category.interface';
import autoIncrement from 'mongoose-auto-increment';

const categorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);
autoIncrement.initialize(connection);
categorySchema.plugin(autoIncrement.plugin, 'Category');
categorySchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
const categoryModel = model<Category & Document>('Category', categorySchema);

export default categoryModel;
