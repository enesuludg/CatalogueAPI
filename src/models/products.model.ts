import { model, Schema, Document } from "mongoose";
import { Products } from "@/interfaces/products.interface";

const productsSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: Number,
      required: true,
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
      default: false,
      required: false,
    },
  },
  {
    versionKey: false,
    toJSON: {
      transform(_doc, ret) {
        delete ret._id;
      },
    },
  }
);

const ProductsModel = model<Products & Document>("Product", productsSchema);

export default ProductsModel;
