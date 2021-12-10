import { model, Schema, Document, connection } from 'mongoose';
import { Products } from '@/interfaces/products.interface';
import autoIncrement from 'mongoose-auto-increment';

const productsSchema: Schema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);
autoIncrement.initialize(connection);
productsSchema.plugin(autoIncrement.plugin, 'Product');

const ProductsModel = model<Products & Document>('Product', productsSchema);

export default ProductsModel;
